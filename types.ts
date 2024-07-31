export interface Video {
    path: string
    title: string
    description: string
    tags?: string[]
    language?: string
    playlist?: string
    function?: any
    thumbnail?: string
    publishType?: 'PRIVATE' | 'UNLISTED' | 'PUBLIC'
    onSuccess?: (url: string, video: Video) => void
    skipProcessingWait?: boolean
    onProgress?: (arg0: VideoProgress) => void
    channelName?: string
    uploadAsDraft?: boolean
    isAgeRestriction?: boolean
    isNotForKid?: boolean
    isChannelMonetized?: boolean
    gameTitleSearch?: string
    publishToSubscriptionFeedAndNotifySubscribers?: boolean
    gameSelector?: ( arg0: GameData ) => Promise<boolean> | null
}

export interface MessageTransport {
    error: (message: any) => void,
    warn: (message: any) => void,
    log: (message: any) => void,
    debug: (message: any) => void,
    userAction: (message: string) => void,
    onSmsVerificationCodeSent?: () => Promise<string | undefined>
}

export enum ProgressEnum {
    Uploading,
    Processing,
    Done
}

export interface VideoProgress {
    progress: number
    stage: ProgressEnum
}

export interface VideoToEdit {
    link: string
    title?: string
    description?: string
    tags?: string[]
    replaceTags?: string[]
    language?: string
    playlist?: string
    function?: any
    thumbnail?: string
    publishType?: 'private' | 'unlisted' | 'public' | 'public&premiere'
    onSuccess?: Function
    channelName: string
    isAgeRestriction?: boolean
    isNotForKid?: boolean
    gameTitleSearch?: string
    gameSelector?: ( arg0: GameData ) => Promise<boolean> | null
}

export interface Comment {
    link: string
    comment: string
    live?: boolean
    onSuccess?: Function
    pin?: boolean
}

export interface Credentials {
    email: string
    pass: string
    recoveryemail?: string | undefined
}

export interface GameData {
    title: string
    year?: string
    mid?: string
}