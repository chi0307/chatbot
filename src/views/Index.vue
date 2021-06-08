<template>
  <div class="index-page">
    <div class="chat-box" id="content">
      <div class="all-message">
        <div v-for="(message, index) of messagesList" :key="index" class="message">
          <div v-if="message.role === 'user'" class="user user-text">
            <p>
              {{ message.text }}
            </p>
          </div>
          <div v-else-if="message.role === 'bot' && message.type === 'text'" class="bot bot-text">
            <p v-html="message.text" />
          </div>
          <div v-else-if="message.role === 'bot' && message.type === 'image'" class="bot bot-image">
            <a :href="message.imageUrl" target="_blank">
              <img :src="message.previewImageUrl" />
            </a>
          </div>
          <div v-else-if="message.role === 'bot' && message.type === 'video'" class="bot bot-video">
            <video :src="message.videoUrl" :poster="message.previewImageUrl" controls />
          </div>
          <div v-else-if="message.role === 'bot' && message.type === 'audio'" class="bot bot-audio">
            <audio :src="message.audioUrl" controls />
          </div>
          <div
            v-else-if="message.role === 'bot' && message.type === 'button'"
            class="bot bot-button"
          >
            <div class="button-box">
              <p v-html="message.text" />
              <button
                class="action-button"
                v-for="(button, index) of message.buttons"
                :key="index"
                @click="clickButton(button)"
              >
                {{ button.title }}
              </button>
            </div>
          </div>
          <div
            v-else-if="message.role === 'bot' && message.type === 'carousel'"
            class="bot bot-carousel"
          >
            <div class="carousel-box">
              <FontAwesomeIcon
                class="icon arrow-left"
                :icon="['fas', 'chevron-circle-left']"
                @click="carouselArrowLeft"
              />
              <div class="carousel-content">
                <div v-for="(column, index) of message.columns" :key="index" class="carousel-box">
                  <img v-if="column.imageUrl" :src="column.imageUrl" class="carousel-image" />
                  <div class="carousel-text">
                    <h3 class="title">{{ column.title }}</h3>
                    <p v-html="column.text" />
                  </div>
                  <button
                    class="action-button"
                    v-for="(button, index) of column.buttons"
                    :key="index"
                    @click="clickButton(button)"
                  >
                    {{ button.title }}
                  </button>
                </div>
              </div>
              <FontAwesomeIcon
                class="icon arrow-right"
                :icon="['fas', 'chevron-circle-right']"
                @click="carouselArrowRight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="features-box">
      <div class="send-message-box">
        <input
          type="text"
          class="send-message"
          id="inputMessage"
          v-model="inputText"
          @keyup.enter="dialog"
        />
        <FontAwesomeIcon class="icon" :icon="['fas', 'paper-plane']" @click="dialog" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

type Action =
  | {
      type: 'postback';
      title: string;
      data: string;
    }
  | {
      type: 'url';
      title: string;
      url: string;
    }
  | {
      type: 'phone';
      title: string;
      number: string;
    };

type BotMessage =
  | {
      type: 'text';
      text: string;
    }
  | {
      type: 'image';
      imageUrl: string;
      previewImageUrl: string;
    }
  | {
      type: 'video';
      videoUrl: string;
      previewImageUrl: string;
    }
  | {
      type: 'audio';
      audioUrl: string;
    }
  | {
      type: 'button';
      text: string;
      buttons: Array<Action>;
    }
  | {
      type: 'carousel';
      columns: Array<{
        title: string;
        text: string;
        imageUrl?: string;
        buttons: Array<Action>;
      }>;
    };

type UserMessage = {
  text: string;
};

type Message = (UserMessage & { role: 'user' }) | (BotMessage & { role: 'bot' });

@Options({
  created() {
    this.sendMessage('hello');
  },
  components: {},
})
export default class Home extends Vue {
  inputText = '';

  messagesList: Array<Message> = [];

  /**
   * 將文字 \n 取代成 <br/>
   */
  replaceTextWrap = (text: string): string => text.replace(/\n/g, '<br/>');

  /**
   * 將畫面移至底部
   */
  scrollToBottom = (): void => {
    setTimeout(() => {
      const chatContent = document.getElementById('content');
      if (chatContent) {
        chatContent.scrollTop = chatContent.scrollHeight;
      }
    }, 100);
  };

  /**
   * 用 document Node 網上搜尋指定 class 的節點
   */
  findUpClassName = (inputEl: any, className: string): any => {
    let el = inputEl;
    while (el.parentNode) {
      el = el.parentNode;
      if (Array.prototype.includes.call(el.classList, className)) return el;
    }
    return null;
  };

  /**
   * 輪播左側按鈕
   */
  carouselArrowLeft = (event: any): void => {
    const carouselNode = this.findUpClassName(event.target, 'carousel-box');
    let newScrollPath = 0;
    while (newScrollPath + 290 < carouselNode.scrollLeft) {
      newScrollPath += 290;
    }
    this.animalScrollX(carouselNode, newScrollPath);
  };

  /**
   * 輪播右側按鈕
   */
  carouselArrowRight = (event: any): void => {
    const carouselNode = this.findUpClassName(event.target, 'carousel-box');
    let newScrollPath = 0;
    while (newScrollPath <= carouselNode.scrollLeft) {
      newScrollPath += 290;
    }
    this.animalScrollX(carouselNode, newScrollPath);
  };

  animalScrollX = (node: any, toScrollPath: number): void => {
    const currentScrollPath = node.scrollLeft;
    const movePath = currentScrollPath < toScrollPath ? 1 : -1;
    const pathNumber =
      toScrollPath - currentScrollPath > 0
        ? toScrollPath - currentScrollPath
        : currentScrollPath - toScrollPath;
    for (let time = 0; time < pathNumber; time += 1) {
      setTimeout(() => {
        node.scrollLeft += movePath;
      }, time);
    }
  };

  /**
   * 對話 使用者按下送出或按下 enter 時觸發
   */
  public async dialog(): Promise<void> {
    const { inputText } = this;
    this.inputText = '';
    this.addUserMessage(inputText);
    await this.sendMessage(inputText);
  }

  /**
   * 發送訊息
   */
  public async sendMessage(inputText: string): Promise<void> {
    const { data: botMessages } = await this.axios({
      method: 'post',
      url: `https://ab0a0fb7-30c4-4952-a7bd-5450b38af427.mock.pstmn.io/message?text=${inputText}`,
    });
    console.log('🚀 ~ file: index.vue ~ line 66 ~ Home ~ sendMessage ~ botMessages', botMessages);
    this.addBotMessages(botMessages);
  }

  /**
   * 增加使用者方訊息
   */
  public addUserMessage(text: string): void {
    this.messagesList.push({
      role: 'user',
      text,
    });
    this.scrollToBottom();
  }

  /**
   * 增加 bot 方訊息
   */
  public addBotMessages(messages: Array<BotMessage>): void {
    messages.forEach((message) => {
      switch (message.type) {
        case 'text': {
          this.messagesList.push({
            role: 'bot',
            type: 'text',
            text: this.replaceTextWrap(message.text),
          });
          break;
        }
        case 'image': {
          this.messagesList.push({
            role: 'bot',
            type: 'image',
            imageUrl: message.imageUrl,
            previewImageUrl: message.previewImageUrl,
          });
          break;
        }
        case 'video': {
          this.messagesList.push({
            role: 'bot',
            type: 'video',
            videoUrl: message.videoUrl,
            previewImageUrl: message.previewImageUrl,
          });
          break;
        }
        case 'audio': {
          this.messagesList.push({
            role: 'bot',
            type: 'audio',
            audioUrl: message.audioUrl,
          });
          break;
        }
        case 'button': {
          this.messagesList.push({
            role: 'bot',
            type: 'button',
            text: this.replaceTextWrap(message.text),
            buttons: message.buttons,
          });
          break;
        }
        case 'carousel': {
          this.messagesList.push({
            role: 'bot',
            type: 'carousel',
            columns: message.columns.map((column) => ({
              title: column.title,
              imageUrl: column.imageUrl,
              text: this.replaceTextWrap(column.text),
              buttons: column.buttons,
            })),
          });
          break;
        }
        default: {
          break;
        }
      }
    });

    this.scrollToBottom();
  }

  /**
   * 按鈕事件 type button、carousel 會出現
   */
  public clickButton(action: Action): void {
    switch (action.type) {
      case 'postback': {
        this.addUserMessage(action.title);
        break;
      }
      case 'url': {
        window.open(action.url);
        break;
      }
      case 'phone': {
        window.open(`tel://${action.number}`);
        break;
      }
      default: {
        break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';

.index-page {
  background-color: $primary-color1;
  width: 100vw;
  height: var(--real100vh);
  position: fixed;
}

.chat-box {
  position: fixed;
  top: 20px;
  bottom: 80px;
  border: $primary-color3 2px solid;
  background-color: $white-color;
  border-radius: 40px;
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

  .all-message {
    width: 100%;
    padding: 0px 30px;

    .message {
      margin-top: 20px;
      margin-bottom: 20px;

      .user {
        &-text {
          padding: 15px;
          width: max-content;
          margin-left: auto;
          border-radius: 20px 3px 20px 20px;
          background-color: $primary-color1;
          border: $primary-color2 1px solid;
          max-width: 60%;
          word-wrap: break-word;
          text-align: left;
        }
      }

      .bot {
        &-text {
          width: max-content;
          max-width: 70%;
          padding: 15px;
          margin-right: auto;
          border-radius: 3px 20px 20px 20px;
          background-color: $primary-color1;
          border: $primary-color2 1px solid;
          word-wrap: break-word;
          text-align: left;
        }

        &-image {
          max-width: 70%;
          width: 500px;

          img {
            width: 100%;
            cursor: pointer;
          }
        }

        &-video {
          max-width: 70%;
          width: 500px;

          video {
            width: 100%;
          }
        }

        &-audio {
          max-width: 70%;
          width: 500px;

          audio {
            width: 100%;
          }
        }

        &-button {
          .button-box {
            max-width: 70%;
            width: max-content;
            min-width: 250px;

            p {
              max-width: 100%;
              padding: 15px;
              width: max-content;
              margin-right: auto;
              border-radius: 3px 20px 20px 20px;
              background-color: $primary-color1;
              border: $primary-color2 1px solid;
              word-wrap: break-word;
              text-align: left;
            }
          }
        }

        &-carousel {
          padding-left: 3vw;
          padding-right: 3vw;
          position: relative;

          .carousel-box {
            overflow-x: auto;

            &::-webkit-scrollbar {
              width: 0px;
            }

            .carousel-content {
              width: max-content;

              .carousel-box {
                float: left;
                width: 250px;
                margin-left: 20px;
                margin-right: 20px;

                .carousel-image {
                  width: 250px;
                }

                .carousel-text {
                  padding: 15px;
                  margin-right: auto;
                  border-radius: 20px;
                  background-color: $primary-color1;
                  border: $primary-color2 1px solid;
                  word-wrap: break-word;
                  text-align: left;

                  .title {
                    margin-top: 0;
                    margin-bottom: 10px;
                  }
                }

                .carousel-image + .carousel-text {
                  border-top-left-radius: 0px;
                  border-top-right-radius: 0px;
                }
              }
            }
          }

          .arrow-left,
          .arrow-right {
            position: absolute;
            top: calc(50% - 12.5px);
            width: 45px;
            height: 45px;
            color: $black-color;
            cursor: pointer;
            padding: 10px;

            &:hover {
              color: $primary-color3;
            }
          }

          .arrow-left {
            left: calc(3vw - 25px);
          }

          .arrow-right {
            right: calc(3vw - 25px);
          }
        }
      }
    }
  }
}

.action-button {
  display: block;
  width: 250px;
  margin-top: 10px;
  height: 40px;
  background-color: $primary-color1;
  border: $primary-color2 1px solid;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: $primary-color2;
    border-color: $primary-color3;
  }
}

.features-box {
  position: fixed;
  bottom: 0px;
  height: 60px;
  width: 100vw;
  padding: 0 40px 20px 40px;
  display: flex;
  align-content: stretch;
  justify-content: center;
  flex-direction: row;

  .send-message-box {
    flex: 1;
    position: relative;

    .send-message {
      width: 100%;
      height: 40px;
      border: $primary-color2 2px solid;
      background-color: $white-color;
      max-width: calc(100vw - 80px);
      border-radius: 20px;
      padding: 0 40px 0 20px;

      &:focus-visible {
        outline: none;
      }
    }

    .icon {
      position: absolute;
      right: 0px;
      width: 40px;
      height: 40px;
      padding: 10px;
      cursor: pointer;
      color: $primary-color2;

      &:hover {
        color: $primary-color3;
      }
    }
  }
}
</style>
