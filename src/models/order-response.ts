/* tslint:disable */
/* eslint-disable */
/**
 * OnlineStore.WebApi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { OrderItemResponse } from './order-item-response';
/**
 * 
 * @export
 * @interface OrderResponse
 */
export interface OrderResponse {
    /**
     * 
     * @type {Array<OrderItemResponse>}
     * @memberof OrderResponse
     */
    items?: Array<OrderItemResponse> | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    orderId?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderResponse
     */
    accountId?: string;
    /**
     * 
     * @type {Date}
     * @memberof OrderResponse
     */
    orderDate?: Date;
}
