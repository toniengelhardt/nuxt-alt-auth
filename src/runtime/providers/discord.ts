import type { ProviderOptions, ProviderPartialOptions } from '../../types';
import type { Oauth2SchemeOptions } from '..';
import type { Nuxt } from '@nuxt/schema';
import { assignDefaults, addAuthorize } from '../../utils/provider';

export interface DiscordProviderOptions extends ProviderOptions, Oauth2SchemeOptions {}

export function discord(nuxt: Nuxt, strategy: ProviderPartialOptions<DiscordProviderOptions>): void {
    const DEFAULTS: typeof strategy = {
        scheme: 'oauth2',
        endpoints: {
            authorization: 'https://discord.com/api/oauth2/authorize',
            token: 'https://discord.com/api/oauth2/token',
            userInfo: 'https://discord.com/api/users/@me',
            //   logout: 'https://discord.com/api/oauth2/token/revoke' //TODO: add post method, because discord using the post method to logout
        },
        grantType: 'authorization_code',
        codeChallengeMethod: 'S256',
        scope: ['identify', 'email'],
    };

    assignDefaults(strategy, DEFAULTS);

    addAuthorize(nuxt, strategy, true);
}
