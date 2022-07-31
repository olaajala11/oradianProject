/**
 * This stores basic page functions for the registered client account page
 */

 import Element from '../element';

 export const clientAccountDashboardPage = new Element('h1 > span');
 export const firstName = new Element('[class*="SectionItem__SectionItem"]:nth-child(5) [class*="SectionItem__SectionItemValue"]');
 export const lastName = new Element('[class*="SectionItem__SectionItem"]:nth-child(7) [class*="SectionItem__SectionItemValue"]');