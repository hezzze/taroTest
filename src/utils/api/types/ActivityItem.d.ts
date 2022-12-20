/**
 * ActivityItem
 */
export interface ActivityItem {
    /**
     * 活动ID
     */
    activity_id?: string;
    /**
     * 活动名称
     */
    activity_name?: string;
    create_at?: number;
    /**
     * 结束时间
     */
    end_at?: number;
    /**
     * 介绍
     */
    introduction?: string;
    /**
     * 位置
     */
    location?: string;
    /**
     * 定位信息
     */
    location_geo?: string;
    /**
     * 要求
     */
    requirement?: string;
    /**
     * 开始时间
     */
    start_at?: number;
    /**
     * 状态
     */
    status?: number;
    /**
     * 主题
     */
    themes?: Array<string[]>;
    /**
     * 活动类型
     */
    type?: number;
    update_at?: number;
}
