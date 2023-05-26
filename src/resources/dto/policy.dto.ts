/**
 * Policy List
 * @alias PolicyList
 * @typedef PolicyList
 */
export interface PolicyList {
  policies: Policy[];
}
/**
 * Policy data
 * @alias Policy
 * @typedef Policy
 */
export interface Policy {
  amountInsured: number;
  clientId: string;
  email: string;
  id: string;
  inceptionDate: Date;
  installmentPayment: boolean;
}
