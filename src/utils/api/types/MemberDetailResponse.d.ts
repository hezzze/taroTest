/**
 * MemberData, 请求数据
 */
export interface MemberData {
    /**
     * 年龄
     */
    age?: number;
    /**
     * 区号
     */
    area_code?: string;
    /**
     * 出生年月
     */
    birthdate?: number;
    /**
     * 星座
     */
    constellation?: string;
    create_at?: number;
    /**
     * 情感状态
     */
    emotions?: number;
    /**
     * 家乡
     */
    hometown?: string;
    /**
     * 自我介绍
     */
    introduction?: string;
    /**
     * 会员ID
     */
    member_id?: string;
    /**
     * 手机号
     */
    mobile?: string;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 需求
     */
    required?: string;
    /**
     * 学校
     */
    school?: string;
    /**
     * 会员状态
     */
    status?: number;
    /**
     * 标签
     */
    tags?: Array<string>;
    update_at?: number;
    /**
     * 用户ID
     */
    user_id?: string;
    /**
     * 微信号
     */
    wechat_no?: string;
}
