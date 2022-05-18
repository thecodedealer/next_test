import { ImageFormats } from '../constants/Image';

export interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface ApiImageData {
    data: {
        id: number
        attributes: {
            name: string
            alternativeText: string
            caption: string
            width: number
            height: number
            formats: Record<ImageFormats, ImageFormat>
            hash: string
            ext: string
            mime: string
            size: number
            url: string
            previewUrl: any
            provider: string
            provider_metadata: any
            createdAt: string
            updatedAt: string
        }
    };
}
