import { Statemachine, statemachine } from 'overmind'

import {
  Api,
  Demo,
  Guide,
  GuideParams,
  Page,
  SearchResult,
  Video,
} from './types'

type Mode =
  | 'unauthenticated'
  | 'authenticating'
  | 'authenticated'
  | 'unauthenticating'

type State = {
  page: Page
  currentGuide: GuideParams
  currentVideo: string
  currentApi: string
  videos: Video[]
  guides: Guide[]
  demos: Demo[]
  apis: Api[]
  isLoading: boolean
  theme: string
  typescript: boolean
  query: string
  isLoadingSearchResult: boolean
  searchResult: SearchResult[]
  showSearchResult: boolean
  isLoadingGuides: boolean
  isLoadingApis: boolean
  isLoadingVideos: boolean
  showViewHelp: boolean
  versions: {
    [name: string]: string
  }
  mode: Statemachine<Mode>
}

const state: State = {
  page: Page.HOME,
  currentGuide: null,
  currentVideo: null,
  currentApi: null,
  videos: [],
  guides: [],
  demos: [],
  apis: [],
  isLoading: true,
  theme: null,
  typescript: false,
  query: '',
  isLoadingSearchResult: false,
  searchResult: [],
  showSearchResult: false,
  isLoadingGuides: false,
  isLoadingApis: false,
  isLoadingVideos: false,
  showViewHelp: false,
  versions: {},
  mode: statemachine<Mode>({
    initial: 'unauthenticated',
    states: {
      unauthenticated: ['authenticating'],
      authenticating: ['unauthenticated', 'authenticated'],
      authenticated: ['unauthenticating'],
      unauthenticating: ['unauthenticated', 'authenticated'],
    },
  }),
}

export default state
