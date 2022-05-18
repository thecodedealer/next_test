import { FetchScope } from '../constants/FetchScope';
import { ApiContentPath } from '../constants/ApiContentPath';
import qs from 'qs';

export const fetchEngine = async (scope: FetchScope, path: ApiContentPath, query: Record<string, any> | null = null) => {
    try {

        let queryString = '';

        if (query)
            queryString = qs.stringify(query);

        const url = `${ process?.env?.CMS_API_BASE_URL }/${ scope }/${ path }${ !!query ? '?' + queryString : '' }`;

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process?.env?.CMS_API_TOKEN}`
            }
        });

        return await res.json();

    } catch (e) {

        console.error(e);

        return null;

    }
};
