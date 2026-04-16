import { ACTION } from '../common/Action';
import { ParamsStream } from './ParamsStream';
import VideoSettings from '../app/VideoSettings';

export interface ParamsStreamScrcpy extends ParamsStream {
    action: ACTION.STREAM_SCRCPY;
    ws: string;
    /** 宿主嵌入（如 LexiFact iframe）：启用「填满容器 + 等比缩放」布局 */
    embed?: string;
    fitToScreen?: boolean;
    videoSettings?: VideoSettings;
}
