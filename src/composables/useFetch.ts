import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ref } from 'vue';

export const useFetch = async (
    url: string,
    config: AxiosRequestConfig<{ [key: string]: unknown }> = {},
    mekToken?: string | undefined
) => {
    const data = ref<unknown>();
    const response = ref<AxiosResponse>();
    const error = ref<unknown>();
    const loading = ref<boolean>(false);

    const defaultRequestConfig: AxiosRequestConfig<{ [key: string]: unknown }> =
        {
            headers: {
                accept: 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };

    const dataRequest = async () => {
        loading.value = true;

        try {
            const result = await axios.request({
                url,
                ...Object.assign(defaultRequestConfig, config),
            });

            response.value = result;
            data.value = result.data;
        } catch (exception: unknown) {
            error.value = exception;
        } finally {
            loading.value = false;
        }
    };

    await dataRequest();

    return {
        data,
        response,
        error,
        loading,
    };
};
