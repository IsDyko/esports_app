/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  games: {
    index: typeof routes['games.index']
    store: typeof routes['games.store']
    show: typeof routes['games.show']
    update: typeof routes['games.update']
    destroy: typeof routes['games.destroy']
  }
}
