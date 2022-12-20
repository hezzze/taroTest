/**
 * Response
 */
export interface MockLoginResponse {
    /**
     * 错误码
     */
    code?: number;
    data?: LoginResponse;
    /**
     * 错误信息
     */
    msg?: string;
}

/**
 * LoginResponse
 */
export interface LoginResponse {
    /**
     * 登录token
     */
    token?: string;
}