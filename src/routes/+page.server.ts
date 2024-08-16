import { getAlbums } from "$lib";
import type { PageServerLoad } from './$types';

export const load = (() => {
    const albums = getAlbums();
    return {
        albums
    };
}) satisfies PageServerLoad;