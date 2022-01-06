interface writeText {
    fontWeight: number;
    fontSize: number;
    textColor: string;
    text: string;
    x: number;
    y: number;
    fontFamily?: string;
}
interface drawQrcode {
    url: string;
    margin?: number;
}
interface drawImageToCancas {
    image: HTMLImageElement;
    x: number;
    y: number;
    w: number;
    h: number;
}
/**
 * @description: 绘制图片的基础方法
 */
export declare class canvasToImage {
    width: number;
    base: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;
    constructor(width: number);
    /**
     * @description: 写文字
     */
    writeText: (option: writeText) => Promise<unknown>;
    /**
     * @description: canvas导入图片
     */
    loadingImage: (imageData: string) => Promise<unknown>;
    /**
     * @description: canvas绘制二维码并设置大小和位置
     */
    drawQrcode: (option: drawQrcode) => Promise<string>;
    /**
     * @description: 图片加载到canvas中，并设置位置和大小
     */
    drawImageToCancas: (option: drawImageToCancas) => Promise<unknown>;
    /**
     * @description: 初始化canvas背景
     */
    initImageBackground: (image: HTMLImageElement) => Promise<unknown>;
    /**
     * @description: canavs转图片，导出最后的url
     */
    outputImage: () => Promise<unknown>;
    /**
     * @description: 加载自定义字体
     */
    importFont: (fontName: string, fontUrl: string) => Promise<unknown>;
}
export {};