import { Language } from './index'
import { LanguageEnum } from '../models'

const english: Language = {
  leaderBoard: {
    coinsDisplay: function (coins: number) {
      return `$ ${coins}`
    },
    coinsLeaderBoard: 'Coins Leader Board',
    command: {
      desc: 'Get leader boards',
      name: 'leaderboard'
    },
    expLeaderBoard: 'Level Lever Board'
  },
  errorMsg: 'Bot went wrong, please notify the server owner',
  coinBalanceDisplay (amount: number | string): string {
    return `${amount} coins`
  },
  viewProfile: {
    profile: 'Profile',
    inXXX (guildName: string): string {
      return `In ${guildName}`
    },
    yourExp: 'Your Exp'
  },
  commands: {
    getMyProfile: {
      name: 'profile',
      desc: 'View my profile'
    }
  },
  curse: {
    curse: 'Curse',
    language: ['get out of my face', 'stfu', 'u fking asshole']
  },
  setGuildProfile: {
    commands: {
      name: 'config',
      desc: 'Configure this bot',
      subcommand: {
        setAdmin: {
          name: 'admin',
          desc: 'Set admin tag',
          optionName: 'tag',
          optionDesc: 'Admin tag'
        },
        setAnnouncement: {
          name: 'announcement',
          desc: 'Set the announcement channel',
          optionName: 'channel',
          optionDesc: 'Channel for announcement'
        },
        setNotificationChannel: {
          name: 'notification',
          desc: 'Set the notification channel',
          optionName: 'channel',
          optionDesc: 'Channel for notification'
        },
        setOthers: {
          name: 'others',
          desc: 'Configure language and timezone'
        }
      }
    },
    invalidAccess: 'Access denied',
    successMsg: {
      setLanguage (language: LanguageEnum) {
        return `Language has been configure to "${language}"`
      },
      setAdminRole (roleName: string) {
        return `Success, anyone with "${roleName}" tag would has admin permission`
      },
      setNotificationChannel (channelName: string) {
        return `Notification channel has been set to "${channelName}"`
      },
      setAnnouncementChannel (channelName: string) {
        return `Announcement channel has been set to "${channelName}"`
      },
      setTimeZone (timeZoneName: string) {
        return `Time zone has been set to "${timeZoneName}"`
      }
    },
    languageUpdateSoFrequent: 'You need to wait 1 minute for setting the language',
    otherSettingMenu: {
      title: 'Setting',
      languageLabel (language: string) {
        return `Language: "${language}"`
      },
      timeZoneLabel (timeZone: string) {
        return `Time zone: "${timeZone}"`
      }
    },
    close: 'Close'
  },
  transferCoin: {
    transferCommand: 'transfer',
    commandLang: 'Transfer',
    coin: 'coin',
    payee: 'payee',
    detail: 'remark',
    insufficientBalance: 'You have insufficient balance. ',
    transferCompleteMsg: (payeeID: string, amount: number): string => {
      return `Transfer completed! \n<@${payeeID}> You have received ¥${amount} coins yo。`
    },
    senderLeavingMsgInfo: 'Sender has leave a message to you. ',
    coinDesc: 'Coin',
    amountDesc: 'Coin amount',
    commandDesc: 'transfer some coins to other member in the guild',
    detailDesc: 'Remark message for the payee about this transaction',
    payeeDesc: 'The payee\'s account in this guild',
    integerOnly: 'Please enter integer only',
    invalidInt: 'Please enter an integer in the box only. '
  },
  addCoinsExpToUserInVoice: {
    coinTransferMsg (coins: number, totalMinutes: number) {
      return `You have earned ${coins} coins by ${totalMinutes} voice chat`
    }
  },
  notification: 'Notification',
  anonymousMsg: {
    command: {
      name: 'anonymous',
      desc: 'Anonymous Message'
    },
    sendFailed: 'Failed',
    sent: 'Sent',
    anonymousMsgFrom (nickName: string) {
      return `Anonymous message from ${nickName}`
    },
    modal: {
      title: 'Anonymous Message',
      label: 'Input your anonymous message here'
    }
  }
}

export default english
