angular.module('ds.app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('js/app/account/directives/customer-details/customer-details.html',
    "<section class=\"white\" ng-cloak>\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"page-headline hidden-xs\">\n" +
    "                <h1>\n" +
    "                    <small>{{'MY_ACCOUNT' | translate}}</small>\n" +
    "                    <span class=\"welcomeTxt pull-left\">{{'WELCOME' | translate}} <span ng-if=\"account.firstName\" id=\"accountFirstName\">{{account.firstName}}</span></span>\n" +
    "                    <img src=\"./img/user-icon_big.png\" class=\"img-circle pull-left \" />\n" +
    "                </h1>\n" +
    "            </div>\n" +
    "            <div class=\"page-headline mobile hidden-sm hidden-md hidden-lg\">\n" +
    "                <h1>\n" +
    "                    <small>{{'MY_ACCOUNT' | translate}}</small>\n" +
    "                    <div>\n" +
    "                        <img src=\"./img/user-icon_big.png\" class=\"img-circle\" />\n" +
    "                    </div>\n" +
    "                    <span class=\"welcomeTxt pull-left\">{{'WELCOME' | translate}} <span ng-if=\"account.firstName\">{{account.firstName}}</span></span>\n" +
    "\n" +
    "                </h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- desktop display -->\n" +
    "        <div class=\"row userInfoRow hidden-xs hidden-sm desktopUserInfo\" ng-if=\"account\">\n" +
    "\n" +
    "            <div class=\"col-sm-10\">        \n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <div class=\"col-sm-2 editLinkContainer\">\n" +
    "                        <a ng-click=\"editUserName(account)\"><span id=\"edit-user-info\" class=\"glyphicon glyphicon-pencil\"></span></a>\n" +
    "                    </div>\n" +
    "                    <div id=\"account-name\" class=\"col-sm-10\">\n" +
    "                        <span class=\"dataLabel\">{{'NAME' | translate}}</span>\n" +
    "                        {{account.title|translate}} {{account.firstName}} {{account.middleName}} {{account.lastName}}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <div class=\"col-sm-2 editLinkContainer\">\n" +
    "                        <a ng-click=\"editUserEmail(account)\" ng-hide=\"isItSocialAccount\"><span id=\"update-email\" class=\"glyphicon glyphicon-pencil\"></span></a>\n" +
    "                    </div>\n" +
    "                    <div id=\"account-contact-email\" class=\"col-sm-10\">\n" +
    "                        <span class=\"dataLabel\">{{'EMAIL' | translate}}</span>\n" +
    "                        {{account.contactEmail}}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\" ng-hide=\"isItSocialAccount\">\n" +
    "                    <div class=\"col-sm-2 editLinkContainer\">\n" +
    "                        <a ng-click=\"updatePassword()\"><span id=\"update-password\" class=\"glyphicon glyphicon-pencil\"></span></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-10\">\n" +
    "                        <span class=\"dataLabel\">{{'PASSWORD' | translate}}</span>\n" +
    "                        &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                <button ng-click=\"deleteAccount()\" class=\"btn-link delete-btn text-capitalize\">{{'DELETE_ACCOUNT' | translate}}</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- /desktop -->\n" +
    "\n" +
    "        <!-- mobile display -->\n" +
    "        <div class=\"row userInfoRow mobile hidden-md hidden-lg\" ng-if=\"account\">\n" +
    "\n" +
    "            <div class=\"col-xs-8\">\n" +
    "                <div class=\"mobileDataSection\">\n" +
    "                    <span class=\"dataLabel locale\">{{'NAME' | translate}}</span>\n" +
    "                    {{account.title|translate}} {{account.firstName}} {{account.middleName}} {{account.lastName}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-4\">\n" +
    "                <button class=\"btn btn-secondary btn-md pull-right\" ng-click=\"editUserName(account)\">{{'EDIT' | translate}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-8\">\n" +
    "                <div class=\"mobileDataSection\">\n" +
    "                    <span class=\"dataLabel locale\">{{'EMAIL' | translate}}</span>\n" +
    "                    {{account.contactEmail}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-4\" ng-hide=\"isItSocialAccount\">\n" +
    "                <button class=\"btn btn-secondary btn-md pull-right\" ng-click=\"editUserEmail(account)\">{{'EDIT' | translate}}</button>\n" +
    "            </div>\n" +
    "            <div ng-hide=\"isItSocialAccount\">\n" +
    "                <div class=\"col-xs-8\">\n" +
    "                    <div class=\"mobileDataSection\">\n" +
    "                        <span class=\"dataLabel\">{{'PASSWORD' | translate}}</span>\n" +
    "                        &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-4\">\n" +
    "                    <button class=\"btn btn-secondary btn-md pull-right\" ng-click=\"updatePassword()\">{{'EDIT' | translate}}</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <button ng-click=\"deleteAccount()\" class=\"btn-link delete-btn text-capitalize\">{{'DELETE_ACCOUNT' | translate}}</button>\n" +
    "            </div>\n" +
    "        \n" +
    "        </div>\n" +
    "        <!-- /mobile display -->\n" +
    "\n" +
    "        <div class=\"row\" ng-if=\"account\">\n" +
    "            <div class=\"col-sm-12\" ng-include src=\"'js/app/loyalty/templates/user_reward_program.html'\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <p ng-if=\"!account\">{{'FAIL_CUSTOMER_DETAILS' | translate}}</p>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</section>"
  );


  $templateCache.put('js/app/account/templates/account.html',
    "<!--\n" +
    "~ [y] hybris Platform\n" +
    "~\n" +
    "~ Copyright (c) 2000-2015 hybris AG\n" +
    "~ All rights reserved.\n" +
    "~\n" +
    "~ This software is the confidential and proprietary information of hybris\n" +
    "~ (\"Confidential Information\"). You shall not disclose such Confidential\n" +
    "~ Information and shall use it only in accordance with the terms of the\n" +
    "~ license agreement you entered into with hybris.\n" +
    "-->\n" +
    "<div class=\"account\">\n" +
    "\n" +
    "    <customer-details account=\"account\"></customer-details>\n" +
    "\n" +
    "  <section class=\"lightgray\" ng-cloak>\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <div class=\"row\">\n" +
    "          <div class=\"col-xs-12\">\n" +
    "            <div class=\"section-headline clearfix\">\n" +
    "              <h2 class=\"pull-left\">{{'ADDRESSBOOK' | translate}}</h2>\n" +
    "              <button id=\"add-address-btn\" class=\"btn btn-secondary btn-md pull-right\" ng-click=\"openAddressModal()\">\n" +
    "              {{'ADD' | translate}}\n" +
    "              </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div ng-include=\"'js/app/account/templates/addresses.html'\"></div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"text-center\" ng-if=\"showAddressButtons\">\n" +
    "        <button class=\"btn btn-link\" ng-show=\"showAllAddressButton\" ng-click=\"showAllAddresses()\">{{'SHOW_ALL' | translate}} <span class=\"glyphicon glyphicon-chevron-down\"/></button>\n" +
    "        <button class=\"btn btn-link\" ng-show=\"!showAllAddressButton\" ng-click=\"showAllAddresses()\">{{'SHOW_LESS' | translate}} <span class=\"glyphicon glyphicon-chevron-up\"/></button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <section class=\"mediumgray\" ng-cloak>\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <div class=\"section-headline clearfix\">\n" +
    "        <h2>{{'ORDER_HISTORY' | translate}}</h2>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"hidden-md hidden-lg row\">\n" +
    "        <div ng-repeat=\"m_order in orders | limitTo: showOrdersFilter\" class=\"col-sm-4 col-xs-12 orderHistoryCard\" ng-class=\"{'green': order.status == 'CREATED' || order.status == 'CONFIRMED' || order.status == 'SHIPPED', 'red':  order.status == 'DECLINED', 'blue': order.status == 'COMPLETED' }\">\n" +
    "            <div class=\"cardStatusIdentifier pull-left\" ></div>\n" +
    "            <div class=\"panel\">\n" +
    "                <div class=\"panel-body \" >\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-8 col-xs-8 leftCol\">\n" +
    "                            <p>\n" +
    "                              <strong>{{'PLACED_AT'|translate}}</strong><br/>\n" +
    "                              {{m_order.created | date: 'medium'}}\n" +
    "                            </p>\n" +
    "                            <p>\n" +
    "                                <strong>{{'ORDER_NUMBER'|translate}}</strong><br/>\n" +
    "                                <a ui-sref=\"base.orderDetail({orderId: m_order.id})\">{{m_order.id}}</a>\n" +
    "                            </p>\n" +
    "                            <p>\n" +
    "                                <strong>{{'ITEMS_IN_ORDER'|translate}}</strong><br/>\n" +
    "                                {{m_order.entries|sumByKey:'amount'|showNoOfItems}}\n" +
    "                            </p>\n" +
    "                            <p>{{m_order.totalPrice | currency: m_order.currencySymbol}}</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-4 col-xs-4\">\n" +
    "                          <p><strong>{{m_order.status | translate}}</strong></p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-if=\"orders.length\"  class=\"table-responsive hidden-sm hidden-xs\">\n" +
    "        <table class=\"table\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th>{{'DATE' | translate}}</th>\n" +
    "              <th>{{'ORDER_NUMBER' | translate}}</th>\n" +
    "              <th>{{'ITEMS_IN_ORDER' | translate}}</ht>\n" +
    "              <th>{{'ORDER_TOTAL' | translate}}</th>\n" +
    "              <th>{{'ORDER_STATUS' | translate}}</th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "              <tr ng-repeat=\"orderRow in orders | limitTo: showOrdersFilter \">\n" +
    "                  <td>{{orderRow.created | date: 'medium'}}</td>\n" +
    "                  <td><a ui-sref=\"base.orderDetail({orderId: orderRow.id})\">{{orderRow.id}}</a></td>\n" +
    "                  <td>{{orderRow.entries|sumByKey:'amount'|showNoOfItems}}</td>\n" +
    "                  <td>{{orderRow.totalPrice | currency: orderRow.currencySymbol}}</td>\n" +
    "                  <td><strong>{{orderRow.status | translate}}</strong></td>\n" +
    "              </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "\n" +
    "      <p ng-if=\"!orders.length && orders.headers\">{{'NO_ORDERS' | translate}}</p>\n" +
    "      <p ng-if=\"!orders.length && !orders.headers\">{{'FAIL_ORDER' | translate}}</p>\n" +
    "\n" +
    "      <div class=\"text-center\" ng-if=\"showOrderButtons\">\n" +
    "        <button class=\"btn btn-link\" ng-show=\"showAllOrdersButton\" ng-click=\"showAllOrders()\">{{'SHOW_ALL' | translate}} <span class=\"glyphicon glyphicon-chevron-down\"/></button>\n" +
    "        <button class=\"btn btn-link\" ng-show=\"!showAllOrdersButton\" ng-click=\"showAllOrders()\">{{'SHOW_LESS' | translate}} <span class=\"glyphicon glyphicon-chevron-up\"/></button>\n" +
    "      </div>\n" +
    "\n" +
    "      \n" +
    "    </div>\n" +
    "    <div class=\"mediumgray\" style=\"padding-left:10px\" match-background>\n" +
    "       <div ng-include src=\"'js/app/loyalty/templates/reward_history.html'\"></div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/account/templates/address-form.html',
    "<!-- Modal -->\n" +
    "<form name=\"addressForm\" novalidate ng-cloak>\n" +
    "  <div class=\"modal-header\">\n" +
    "    <button class=\"close\" ng-click=\"closeAddressModal()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">{{'CLOSE' | translate}}</span></button>\n" +
    "    <h4 class=\"modal-title\" id=\"myModalLabel\">{{'ADD_ADDRESS' | translate}}</h4>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\" stop-event=\"touchend\">\n" +
    "\n" +
    "      <input type=\"hidden\" name=\"id\" ng-model=\"address.id\">\n" +
    "      <input type=\"hidden\" name=\"account\" ng-model=\"address.account\">\n" +
    "\n" +
    "      <localized-addresses type=\"addAddress\"></localized-addresses>\n" +
    "\n" +
    "    <!-- Errors -->\n" +
    "    <ul ng-if=\"errors && errors.length\" class=\"list-unstyled text-danger\">\n" +
    "      <li ng-repeat=\"error in errors\">{{error.message}}</li>\n" +
    "    </ul>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <a id=\"save-address-btn\" class=\"btn btn-primary btn-lg btn-block\" ng-click=\"save(address, addressForm.$valid, addressForm.$name, addressForm)\">{{'SAVE' | translate}}</a>\n" +
    "  </div>\n" +
    "</form>"
  );


  $templateCache.put('js/app/account/templates/addresses-dialog.html',
    "<div class=\"modal-header\" ng-cloak>\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"closeAddressDialog()\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">{{'CLOSE' | translate}}</span></button>\n" +
    "  <h4 class=\"modal-title\" id=\"myModalLabel\">{{'ADDRESS_BOOK' | translate}}</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" stop-event=\"touchend\">\n" +
    "  <div class=\"row addresses\">\n" +
    "    <div ng-include=\"'./js/app/account/templates/addresses.html'\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"text-center row\" ng-show=\"showAllAddressButton\">\n" +
    "    <button class=\"btn btn-link\" ng-show=\"!showAllAddresses\" ng-click=\"toggleAddresses()\">\n" +
    "        {{'SHOW_ALL' | translate}}\n" +
    "        <span class=\"glyphicon glyphicon-chevron-down\"/>\n" +
    "    </button>\n" +
    "    <button class=\"btn btn-link\" ng-show=\"showAllAddresses\" ng-click=\"toggleAddresses()\">\n" +
    "        {{'SHOW_LESS' | translate}}\n" +
    "        <span class=\"glyphicon glyphicon-chevron-up\"/>\n" +
    "    </button>  \n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/account/templates/addresses.html',
    "<div address-decorator ng-class=\"{ 'col-sm-6 col-md-4 col-lg-4': !isDialog, 'col-xs-12 col-sm-6 col-lg-4': isDialog }\" ng-repeat=\"address in addresses | limitTo: showAddressFilter \" ng-cloak>\n" +
    "  <div class=\"panel\" ng-class=\"{'defaultAddress': address.isDefault, disableAddress: disableAddress(address.country)}\">\n" +
    "    <div class=\"panel-body\" ng-if=\"!isDialog\">\n" +
    "      <div class=\"btn-group-vertical pull-right states-toolbar\">\n" +
    "        <button id=\"set-default-btn\" class=\"btn btn-link btn-lg\"  ng-if=\"addresses.length > 1 && !address.isDefault\" ng-class=\"{ active: address.isDefault }\" ng-click=\"setAddressAsDefault(address)\"><span class=\"glyphicon glyphicon-star\"></span></button>\n" +
    "        <button class=\"btn btn-link btn-lg\" ng-click=\"openAddressModal(address, target)\"><span class=\"glyphicon glyphicon-pencil\"></span></button>\n" +
    "        <button id=\"delete-address-btn\" class=\"btn btn-link btn-lg delete\" ng-if=\"!address.isDefault || addresses.length === 1\" ng-click=\"removeAddress(address)\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n" +
    "      </div>\n" +
    "      <div class=\"\">\n" +
    "        <address ng-class=\"{ 'default-address': (address.isDefault && !isDialog) || (address.selected && isDialog) }\">\n" +
    "          <span class=\"contactName\">{{address.contactName}}</span> <span ng-if=\"address.isDefault && addresses.length > 1\" class=\"defaultLabel\">(default)</span><br>\n" +
    "	  <span class=\"addressInfo\">\n" +
    "            <span ng-if=\"address.companyName\">{{address.companyName}}<br></span>\n" +
    "            <span>{{address.streetNumber}} {{address.street}}<span ng-if=\"address.streetAppendix\">, {{address.streetAppendix}}</span></span><br>\n" +
    "            <span>{{address.city}}, {{address.state}} {{address.zipCode}}</span><br>\n" +
    "            <span>{{address.country}}</span><br>\n" +
    "            <span>{{address.contactPhone}}</span><br>\n" +
    "	  </span>\n" +
    "        </address>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"panel-body\" ng-click=\"ifShipAddressApplicable(address, target)\" ng-if=\"isDialog\">\n" +
    "      <div class=\"btn-group-vertical pull-right states-toolbar\">\n" +
    "        <button class=\"btn btn-link btn-lg\" ng-class=\"{ 'active': address.selected, 'defaultAddress': address.isDefault }\" ng-if=\"address.selected\"><span class=\"glyphicon glyphicon-check\"></span></button>\n" +
    "      </div>\n" +
    "      <div class=\"\">\n" +
    "        <address ng-class=\"{ 'default-address': (address.isDefault && !isDialog) || (address.selected && isDialog) }\">\n" +
    "          <span>{{address.contactName}}</span> <em ng-if=\"address.isDefault\">(default)</em><br>\n" +
    "          <span ng-if=\"address.companyName\">{{address.companyName}}<br></span>\n" +
    "          <span>{{address.streetNumber}} {{address.street}}<span ng-if=\"address.streetAppendix\">, {{address.streetAppendix}}</span></span><br>\n" +
    "          <span>{{address.city}}, {{address.state}} {{address.zipCode}}</span><br>\n" +
    "          <span>{{address.country}}</span><br>\n" +
    "          <span>{{address.contactPhone}}</span><br>\n" +
    "          <span ng-show=\"disableAddress(address.country)\" class=\"list-unstyled text-danger\">{{'CANT_BE_SHIPPED' | translate}}</span><br>\n" +
    "        </address>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "  </div>\n" +
    "  <ul ng-if=\"errors && errors.length && errorAddressId && address.id == errorAddressId\" class=\"list-unstyled text-danger\">\n" +
    "    <li ng-repeat=\"error in errors\">{{error.message}}</li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div class=\"col-sm-12\" ng-if=\"!addresses.length && addresses.headers\">\n" +
    "  <p>{{'NO_ADDRESSES' | translate}}</p>\n" +
    "</div>\n" +
    "<div class=\"col-sm-12\" ng-if=\"!addresses.length && !addresses.headers\">\n" +
    "  <p>{{'FAIL_ADDRESSES' | translate}}</p>\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/account/templates/change-email-confirmation.html',
    "<div ng-if=\"!error\">\n" +
    "    <div ng-if=\"!confirmed\" class=\"text-center\">\n" +
    "        <h1>{{'EDIT_EMAIL_UPDATED'|translate}}</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"confirmed\">\n" +
    "        <section class=\"white text-center\" match-background ng-cloak>\n" +
    "            <h2>{{'EDIT_EMAIL_SUCESSFULLY_UPDATED'|translate}}</h2>\n" +
    "            <p>{{'EDIT_EMAIL_CHANGED_MSG'|translate}}</p>\n" +
    "\n" +
    "            <div class=\"actionButton clearfix emailChangeButton\">\n" +
    "                <button class=\"btn btn-secondary btn-lg\" ui-sref=\"base.home\">\n" +
    "                    {{'CONTINUE_SHOPPING'|translate}}\n" +
    "                </button>\n" +
    "            </div>\n" +
    "\n" +
    "        </section>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"error\">\n" +
    "    <section class=\"white text-center\" match-background ng-cloak>\n" +
    "        <h2>{{'OOPS_MSG'|translate}}</h2>\n" +
    "        <p>\n" +
    "            {{'EDIT_EMAIL_CHANGE_FAILED'|translate}}\n" +
    "        </p>\n" +
    "        <div class=\"actionButton clearfix emailChangeButton\">\n" +
    "            <button class=\"btn btn-secondary btn-lg\" ui-sref=\"base.account\">\n" +
    "                {{'RESET_EMAIL'|translate}}\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>"
  );


  $templateCache.put('js/app/account/templates/delete-account.html',
    "<!-- Modal -->\n" +
    "<div>\n" +
    "    <div class=\"modal-header\">\n" +
    "        <a class=\"close\" ng-click=\"close()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></a>\n" +
    "        <h4 ng-if=\"success\" class=\"modal-title\" id=\"myModalLabel\">{{'ACCOUNT_DELETED' | translate}}</h4>\n" +
    "        <h4 ng-if=\"!success\" class=\"modal-title\" id=\"myModalLabel\">{{'ACCOUNT_NOT_DELETED' | translate}}</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <p ng-if=\"success\">{{'ACCOUNT_DELETED_MSG' | translate}}</p>\n" +
    "        <p ng-if=\"!success\" class=\"error\">{{'PLEASE_CORRECT_MESSAGE_ERRORS' | translate}}</p>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/account/templates/dialogs/address-remove-dialog.html',
    "<div class=\"modal-header\" ng-cloak>\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"close()\" data-dismiss=\"modal\">\n" +
    "        <span aria-hidden=\"true\">&times;</span>\n" +
    "        <span class=\"sr-only\">{{'CLOSE' | translate}}</span>\n" +
    "    </button>\n" +
    "    <h4 class=\"modal-title\" id=\"myModalLabel\">{{'CONFIRM_DELETE_ADDRESS_TITLE' | translate}}</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" stop-event=\"touchend\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            {{'CONFIRM_ADDRESS_REMOVAL'|translate}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" ng-click=\"close()\" id=\"cancel-delete-address-btn\" class=\"btn btn-secondary btn-lg\">{{'CANCEL' | translate}}</button>\n" +
    "    <button type=\"button\" ng-click=\"delete()\" id=\"confirm-delete-address-btn\" class=\"btn btn-primary btn-lg\">{{'DELETE' | translate}}</button>\n" +
    "</div>"
  );


  $templateCache.put('js/app/account/templates/dialogs/order-cancel-dialog.html',
    "<div class=\"modal-header\" ng-cloak>\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"closeCancelOrderDialog()\" data-dismiss=\"modal\">\n" +
    "        <span aria-hidden=\"true\">&times;</span>\n" +
    "        <span class=\"sr-only\">{{'CLOSE' | translate}}</span>\n" +
    "    </button>\n" +
    "    <h4 class=\"modal-title\" id=\"myModalLabel\">{{'CONFIRM_ORDER_CANCEL_TITLE' | translate}}</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" stop-event=\"touchend\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            {{'CONFIRM_CANCEL_ORDER'|translate}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"orderCancelError\" class=\"row error\">\n" +
    "        {{orderCancelError}}\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" ng-click=\"closeCancelOrderDialog()\" id=\"cancel-order-cancel-btn\" class=\"btn btn-secondary btn-lg\">{{'NO' | translate}}</button>\n" +
    "    <button type=\"button\" ng-click=\"cancelOrder()\" id=\"confirm-order-cancel-btn\" class=\"btn btn-primary btn-lg\">{{'YES' | translate}}</button>\n" +
    "</div>"
  );


  $templateCache.put('js/app/account/templates/modals/delete-account-confirm-request.html',
    "<!-- Modal -->\n" +
    "<div>\n" +
    "    <div class=\"modal-header\">\n" +
    "        <a class=\"close\" ng-click=\"close()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></a>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">{{'CHECK_EMAIL' | translate}}</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <p>{{'DELETE_ACCOUNT_CHECK_EMAIL_MSG' | translate}}</p>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/account/templates/modals/delete-account-dialog.html',
    "<!-- Modal -->\n" +
    "<form name=\"deleteAccountForm\" novalidate>\n" +
    "    <div class=\"modal-header\">\n" +
    "        <a class=\"close\" ng-click=\"close()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></a>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">{{'DELETE_ACCOUNT' | translate}}</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <p>{{'DELETE_ACCOUNT_MSG' | translate}}</p>\n" +
    "        <div class=\"text-danger list-unstyled\" ng-show=\"showError\">\n" +
    "            <small class=\"help-inline has-error\">{{'PLEASE_CORRECT_MESSAGE_ERRORS' | translate}}</small>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button ng-click=\"close()\" class=\"btn btn-link\">\n" +
    "            {{'CANCEL'|translate}}\n" +
    "        </button>\n" +
    "        <button ng-click=\"deleteAccount()\" ng-disabled=\"submitDisabled\" class=\"btn btn-primary\">\n" +
    "            {{'DELETE'|translate}}\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/app/account/templates/modals/edit-user-email-dialog.html',
    "<!--Step 1-->\n" +
    "<div ng-if=\"step === 1\">\n" +
    "    <div class=\"modal-header\" ng-cloak>\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"closeEditUserDialog()\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "        <h4 class=\"modal-title\">\n" +
    "            {{'UPDATE_EMAIL' | translate}}\n" +
    "        </h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <form name=\"updateUserInfoForm\" ng-submit=\"updateUserInfo()\" novalidate stop-event=\"touchend\">\n" +
    "        <div class=\"modal-body\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-12 col\">\n" +
    "                    <div class=\"form-group input-group\">\n" +
    "                        <label class=\"input-group-addon control-label\" for=\"email\">{{'CURRENT_EMAIL' | translate}}</label>\n" +
    "                        <input type=\"email\" class=\"form-control ui-autocomplete\" id=\"email\" name=\"email\"\n" +
    "                               ng-model=\"account.email\" disabled reqired>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group input-group\"\n" +
    "                         ng-class=\"{'has-error': updateUserInfoForm.newEmail.$invalid && (updateUserInfoForm.newEmail.$dirty  || showPristineErrors)}\">\n" +
    "                        <label class=\"input-group-addon control-label\" for=\"newEmail\">{{'NEW_EMAIL' | translate}}</label>\n" +
    "                        <input inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                               type=\"email\" class=\"form-control ui-autocomplete\" id=\"newEmail\" name=\"newEmail\"\n" +
    "                               ng-model=\"account.newEmail\" required autocomplete=\"on\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group input-group\"\n" +
    "                         ng-class=\"{'has-error': updateUserInfoForm.password.$invalid && (updateUserInfoForm.password.$dirty  || showPristineErrors)}\">\n" +
    "                        <label class=\"input-group-addon control-label\" for=\"password\">{{'PASSWORD' | translate}}</label>\n" +
    "                        <input inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                               type=\"password\" class=\"form-control ui-autocomplete\" id=\"password\" name=\"password\"\n" +
    "                               ng-model=\"account.password\" required autocomplete=\"on\">\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"error\" ng-if=\"error\">\n" +
    "                        {{error}}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" ng-click=\"closeEditUserDialog()\" id=\"cancel-btn\" class=\"btn btn-secondary btn-lg\">{{'CANCEL' | translate}}</button>\n" +
    "                <button type=\"submit\" id=\"save-btn\" class=\"btn btn-primary btn-lg\" ng-disabled=\"updateUserInfoForm.$invalid\">{{'SAVE' | translate}}</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "<!--Step 2-->\n" +
    "<div ng-if=\"step === 2\">\n" +
    "    <section>\n" +
    "        <div class=\"page-header\">\n" +
    "            <h2>{{'CHECK_EMAIL' | translate }}</h2>\n" +
    "            <p>{{'CHECK_EMAIL_INSTRUCT_CHANGE_EMAIL' | translate }}</p>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>"
  );


  $templateCache.put('js/app/account/templates/modals/edit-user-name-dialog.html',
    "<div class=\"modal-header\" ng-cloak>\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"closeEditUserDialog()\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n" +
    "    <h4 class=\"modal-title\">\n" +
    "        {{'UPDATE_ACCOUNT_DETAILS' | translate}}\n" +
    "    </h4>\n" +
    "</div>\n" +
    "<form name=\"updateUserInfoForm\" ng-submit=\"updateUserInfo()\" novalidate stop-event=\"touchend\">\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"col-lg-12 custom-select-container checkout-selector\">\n" +
    "                <div class=\"form-group input-group\">\n" +
    "                    <label class=\"input-group-addon control-label\" for=\"titleAccount\">{{'TITLE' | translate}}</label>\n" +
    "                    <ui-select ng-model=\"account.title\">\n" +
    "                      <ui-select-match>\n" +
    "                        {{$select.selected}}\n" +
    "                      </ui-select-match>\n" +
    "                      <ui-select-choices repeat=\"title in titles | filter: $select.search\">\n" +
    "                        {{title}}\n" +
    "                      </ui-select-choices>\n" +
    "                    </ui-select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-12 col\">\n" +
    "                <div class=\"form-group input-group\"\n" +
    "                     ng-class=\"{'has-error': updateUserInfoForm.firstNameAccount.$invalid && (updateUserInfoForm.firstNameAccount.$dirty  || showPristineErrors)}\">\n" +
    "                    <label class=\"input-group-addon control-label\" for=\"firstNameAccount\">{{'FIRST_NAME' | translate}}</label>\n" +
    "                    <input inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                           type=\"text\" class=\"form-control ui-autocomplete\" id=\"firstNameAccount\" name=\"firstNameAccount\"\n" +
    "                           ng-model=\"account.firstName\" required autocomplete=\"on\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-12 col\">\n" +
    "                <div class=\"form-group input-group\"\n" +
    "                     ng-class=\"{'has-error': updateUserInfoForm.middleNameAccount.$invalid && (updateUserInfoForm.middleNameAccount.$dirty  || showPristineErrors)}\">\n" +
    "                    <label class=\"input-group-addon control-label\" for=\"middleNameAccount\">{{'MIDDLE_NAME' | translate}}</label>\n" +
    "                    <input type=\"text\" class=\"form-control ui-autocomplete\" id=\"middleNameAccount\" name=\"middleNameAccount\"\n" +
    "                           ng-model=\"account.middleName\" autocomplete=\"on\" placeholder=\"(Optional)\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <div class=\"form-group input-group\"\n" +
    "                     ng-class=\"{'has-error': updateUserInfoForm.lastNameAccount.$invalid && (updateUserInfoForm.lastNameAccount.$dirty  || showPristineErrors)}\">\n" +
    "                    <label class=\"input-group-addon control-label\" for=\"lastNameAccount\">{{'LAST_NAME' | translate}}</label>\n" +
    "                    <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                           class=\"form-control\" id=\"lastNameAccount\" name=\"lastNameAccount\" ng-model=\"account.lastName\"\n" +
    "                           required autocomplete=\"on\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"modal-footer\">\n" +
    "            <button type=\"button\" ng-click=\"closeEditUserDialog()\" id=\"cancel-btn\" class=\"btn btn-secondary btn-lg\">{{'CANCEL' | translate}}</button>\n" +
    "            <button type=\"submit\" id=\"save-btn\" class=\"btn btn-primary btn-lg\">{{'SAVE' | translate}}</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>\n"
  );


  $templateCache.put('js/app/account/templates/order-detail.html',
    "<!--\n" +
    "  ~ [y] hybris Platform\n" +
    "  ~\n" +
    "  ~ Copyright (c) 2000-2014 hybris AG\n" +
    "  ~ All rights reserved.\n" +
    "  ~\n" +
    "  ~ This software is the confidential and proprietary information of hybris\n" +
    "  ~ (\"Confidential Information\"). You shall not disclose such Confidential\n" +
    "  ~ Information and shall use it only in accordance with the terms of the\n" +
    "  ~ license agreement you entered into with hybris.\n" +
    "  -->\n" +
    "\n" +
    "<div class=\"account\">\n" +
    "    <section class=\"white orderHeaderContainer\" ng-cloak>\n" +
    "        <div class=\"page-headline\">\n" +
    "            <div class=\"breadCrumb\">\n" +
    "                <a data-ui-sref=\"base.account\">{{'MY_ACCOUNT' | translate}}</a> / {{'ORDER_DETAILS' | translate}}\n" +
    "            </div>\n" +
    "            <h1>{{'ORDER' | translate}} {{order.id}}</h1>\n" +
    "        </div>\n" +
    "        <div class=\"section-headline\">\n" +
    "            <h2>{{'ORDER_DETAILS' | translate}}</h2>\n" +
    "            <span class=\"area-headline date\">{{'ORDER_DATE' | translate}} <span class=\"orderDate\">{{orderDate}}</span></span>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <!-- AREA -->\n" +
    "            <div class=\"col-md-4 col-sm-12 col-xs-12\">\n" +
    "                <div class=\"\">\n" +
    "                    <span class=\"area-headline\">\n" +
    "                        {{'SHIPPING_ADDRESS' | translate}}\n" +
    "                    </span>\n" +
    "                    <address>\n" +
    "                        {{order.shippingAddress.contactName}}<br>\n" +
    "                        <div ng-if=\"order.shippingAddress.companyName\">{{order.shippingAddress.companyName}}<br></div>\n" +
    "                        {{order.shippingAddress.street}}<div ng-if=\"order.shippingAddress.streetAppendix\">, {{order.shippingAddress.streetAppendix}}</div><br>\n" +
    "                        {{order.shippingAddress.city}}, {{order.shippingAddress.state}} {{order.shippingAddress.zipCode}}<br>\n" +
    "                        {{order.shippingAddress.country}}<br>\n" +
    "                        {{order.shippingAddress.contactPhone}}<br>\n" +
    "                    </address>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- AREA -->\n" +
    "            <div class=\"col-md-4 col-sm-12 col-xs-12\">\n" +
    "                <div class=\"\">\n" +
    "  		<span class=\"area-headline\">\n" +
    "  			{{'BILLING_ADDRESS' | translate}}\n" +
    "  		</span>\n" +
    "                    <address>\n" +
    "                        {{order.billingAddress.contactName}}<br>\n" +
    "                        <div ng-if=\"order.billingAddress.companyName\">{{order.billingAddress.companyName}}<br></div>\n" +
    "                        {{order.billingAddress.street}}<div ng-if=\"order.billingAddress.streetAppendix\">, {{order.billingAddress.streetAppendix}}</div><br>\n" +
    "                        {{order.billingAddress.city}}, {{order.billingAddress.state}} {{order.billingAddress.zipCode}}<br>\n" +
    "                        {{order.billingAddress.country}}<br>\n" +
    "                        {{order.billingAddress.contactPhone}}\n" +
    "                    </address>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- AREA -->\n" +
    "            <div class=\"col-md-4 col-sm-12 col-xs-12\">\n" +
    "                <div class=\"\">\n" +
    "  		<span class=\"area-headline\">\n" +
    "  			{{'PAYMENT' | translate}}\n" +
    "  		</span>\n" +
    "                    <p>{{'CREDIT_CARD' | translate}}, {{payment.paidAmount}} {{payment.currency}}, {{payment.status | translate}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </section>\n" +
    "    <section class=\"mediumgray orderStatusContainer\" ng-cloak>\n" +
    "        <div class=\"section-headline row\">\n" +
    "            <div class=\"col-md-10 col-sm-9\">\n" +
    "                <h2>{{'ORDER_STATUS' | translate}} <span class=\"order-status\">- {{order.status | translate}}</span></h2>    \n" +
    "            </div>\n" +
    "            <div class=\"col-md-2 col-sm-3\">\n" +
    "                <button id=\"cancelOrder\" ng-if=\"showCancelBtn(order)\" ng-click=\"cancelOrder()\" class=\"btn btn-primary cancel-order\">{{'ORDER_CANCEL' | translate}}</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"shipment in order.shipments\">\n" +
    "            <div translate=\"SHIPPED_BY_ON\" translate-compile\n" +
    "                 translate-values=\"{carrier: '{{shipment.carrier}}', shippedDate: '{{shipment.shippedDate}}'}\"></div>\n" +
    "            <br>\n" +
    "            <div ng-if=\"shipment.trackingNumber\" translate=\"TRACKING_NUMBER\" translate-compile\n" +
    "                 translate-values=\"{trackingNumber: '{{shipment.trackingNumber}}'}\"></div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "    <section class=\"white clearfix orderItemsContainer\" ng-cloak>\n" +
    "        <div class=\"section-headline\">\n" +
    "            <h2>{{'ITEMS_IN_YOUR_ORDER' | translate}}</h2>\n" +
    "        </div>\n" +
    "        <div class=\"table-responsive order-tabel hidden-xs hidden-sm hidden-md\">\n" +
    "            <table class=\"table\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>{{'ITEM' | translate}}</th>\n" +
    "                    <th>{{'ITEM_PRICE' | translate}}</th>\n" +
    "                    <th>{{'QUANTITY' | translate}}</th>\n" +
    "                    <th class=\"priceColumn\">{{'TOTAL_PRICE' | translate}}</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"entry in order.entries\">\n" +
    "                        <td class=\"col-lg-7 col-md-7 col-sm-5 col-xs-5\">\n" +
    "                            <div class=\"cart-item row\">\n" +
    "                                <div class=\"img-col col-xs-4 col-sm-4 col-lg-4\">\n" +
    "                                    <a ui-sref=\"base.product.detail( {productId: entry.id} )\">\n" +
    "                                        <img class=\"img-responsive\" ng-src=\"{{ entry && entry.product.images[0].url || PLACEHOLDER_IMAGE}}\">\n" +
    "                                    </a>\n" +
    "                                </div>\n" +
    "                                <div class=\"detail-col col-xs-8 col-sm-8 col-lg-8\">\n" +
    "                                    <div class=\"name \"><a ui-sref=\"base.product.detail( {productId: entry.id} )\">{{entry.product.name}}</a></div>\n" +
    "                                    <div class=\"price item-attr \">{{'SKU' | translate}}: <span> {{entry.product.sku}}</span></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </td>\n" +
    "                        <td class=\"col-lg-2 col-md-2 col-sm-3 col-xs-3\">\n" +
    "                            <span>{{entry.unitPrice | currency: currencySymbol}}</span>\n" +
    "                            <span class=\"priceUnit\" ng-if=\"entry.measurementUnit\">{{entry.measurementUnit.value}} {{entry.measurementUnit.unit}}</span>\n" +
    "                        </td>\n" +
    "                        <td class=\"col-lg-1 col-md-1 col-sm-2 col-xs-3\">{{entry.amount}}</td>\n" +
    "                        <td class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 priceColumn\">{{entry.totalPrice | currency: currencySymbol}}</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div class=\"hidden-lg\">\n" +
    "            <div class=\"summary\" ng-repeat=\"entry in order.entries\">\n" +
    "                <div class=\"cart-item row\">\n" +
    "                    <div class=\"col-xs-4 col-md-4 text-center img-col\">\n" +
    "                        <a ui-sref=\"base.product.detail( {productId: entry.product.id} )\">\n" +
    "                            <img class=\"img-responsive\" ng-src=\"{{ entry && entry.product.images[0].url || PLACEHOLDER_IMAGE}}\">\n" +
    "                        </a>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-8 col-md-8  detail-col\">\n" +
    "\n" +
    "                        <div class=\"name\"><a ui-sref=\"base.product.detail( {productId: entry.product.id} )\">{{entry.product.name}}</a></div>\n" +
    "                        <div class=\"price item-attr\">{{'ITEM_PRICE' | translate}}: \n" +
    "                            <span> {{entry.unitPrice | currency: currencySymbol}}</span>\n" +
    "                            <span class=\"priceUnit\" ng-if=\"entry.measurementUnit\">{{entry.measurementUnit.value}} {{entry.measurementUnit.unit}}</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"variants row item-attr\">\n" +
    "                            <div class=\"variant col-md-6 \">{{'QTY' | translate}}: <span>{{entry.amount}}</span></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"price-total item-attr\">{{'TOTAL_PRICE' | translate}}: <span>{{entry.totalPrice | currency: currencySymbol}}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"summary row\">\n" +
    "            <div class=\"col-md-offset-7 col-lg-offset-7 col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n" +
    "                <!-- ORDER-DETAIL -->\n" +
    "                <table class=\"table\">\n" +
    "                    <tbody>\n" +
    "                    <tr>\n" +
    "                        <td >{{'SUBTOTAL' | translate}}</td>\n" +
    "\n" +
    "                        <td class=\"text-right\">\n" +
    "                            {{order.totalPrice - order.tax.total.amount - order.shipping.total.amount + (order.discounts[0].amount || 0 ) | currency: currencySymbol}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td>{{'SHIPPING' | translate}}</td>\n" +
    "                        <td class=\"text-right\">\n" +
    "                            {{order.shipping.total.amount | currency: currencySymbol}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-if=\"order.discounts && order.discounts[0].amount != 0\">\n" +
    "                        <td>{{'DISCOUNT' | translate}}</td>\n" +
    "                        <td class=\"text-right\">\n" +
    "                            <span class=\"error\">-{{ order.discounts[0].amount || 0 | currency: currencySymbol}}</span>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-repeat=\"taxLine in order.tax.lines\" ng-if=\"!!order.tax && !order.tax.total.inclusive\">\n" +
    "                        <td ng-if=\"taxLine.name\">{{taxLine.name}}</td>\n" +
    "                        <td ng-if=\"!taxLine.name\">{{'TAX' | translate}}</td>\n" +
    "                        <td class=\"text-right\">\n" +
    "                            {{taxLine.amount | currency: currencySymbol}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    </tbody>\n" +
    "                    <tfoot>\n" +
    "                    <tr>\n" +
    "                        <td>{{'ORDER_TOTAL' | translate}}</td>\n" +
    "                        <td class=\"text-right\">{{order.totalPrice | currency: currencySymbol}}</td>\n" +
    "                    </tr>\n" +
    "                    </tfoot>\n" +
    "                </table>\n" +
    "                \n" +
    "                <div ng-include src=\"'js/app/loyalty/templates/order-detail.html'\" class=\"orderDetailPoints\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/addAddressCA.html',
    "<div>\n" +
    "\n" +
    "      <div class=\"checkout-selector\">\n" +
    "        <div class=\"form-group input-group custom-select-container\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "            <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\">\n" +
    "                <ui-select-match>\n" +
    "                    {{$select.selected.name}}\n" +
    "                </ui-select-match>\n" +
    "                <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                    {{item.name}}\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.contactName.$invalid && (addressForm.contactName.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactName\">{{'FULL_NAME' | translate}}</label>\n" +
    "        <input inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" type=\"text\" class=\"form-control ui-autocomplete\" id=\"contactName\" name=\"contactName\" ng-model=\"address.contactName\" required autocomplete=\"on\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'CA'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"companyName\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"companyName\" name=\"companyName\" ng-model=\"address.companyName\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.street.$invalid && (addressForm.street.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"street\">{{'ADDRESS_LINE_1' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"street\" name=\"street\" ng-required=\"addressForm.country.$viewValue.id === 'CA'\"\n" +
    "        ng-model=\"address.street\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.streetAppendix.$invalid && (addressForm.streetAppendix.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"streetAppendix\">{{'ADDRESS_LINE_2' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input class=\"form-control\" id=\"streetAppendix\" name=\"streetAppendix\" placeholder=\"(Optional)\"\n" +
    "        ng-model=\"address.streetAppendix\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.city.$invalid && (addressForm.city.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"city\">{{'CITY' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"city\" name=\"city\" required autocomplete=\"on\"\n" +
    "        ng-model=\"address.city\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'CA'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"checkout-selector\">\n" +
    "        <div class=\"form-group input-group custom-select-container checkout-selector\"\n" +
    "            ng-class=\"{'has-error': addressForm.state.$invalid && (addressForm.state.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"state\">{{'PROVINCE' | translate}}</label>\n" +
    "            <ui-select ng-model=\"address.state\" id=\"state\" name=\"state\" ng-required=\"addressForm.country.$viewValue.id === 'CA'\">\n" +
    "                  <ui-select-match>\n" +
    "                      {{$select.selected.name}}\n" +
    "                  </ui-select-match>\n" +
    "                  <ui-select-choices repeat=\"item.id as item in (caProvinces | filter: $select.search)\">\n" +
    "                      {{item.name}}\n" +
    "                  </ui-select-choices>\n" +
    "              </ui-select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.zipCode.$invalid && (addressForm.zipCode.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"zipCode\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"zipCode\" name=\"zipCode\" required autocomplete=\"on\"\n" +
    "        ng-model=\"address.zipCode\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'CA'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactPhone\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"contactPhone\" name=\"contactPhone\" ng-model=\"address.contactPhone\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/addAddressCN.html',
    "<div>\n" +
    "\n" +
    "      <div class=\"form-group input-group custom-select-container\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "          <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\">\n" +
    "              <ui-select-match>\n" +
    "                  {{$select.selected.name}}\n" +
    "              </ui-select-match>\n" +
    "              <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                  {{item.name}}\n" +
    "              </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "          ng-class=\"{'has-error': addressForm.zip.$invalid && (addressForm.zip.$dirty || showPristineErrors) }\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"zipCodeAdd\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "          <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "          class=\"form-control\" id=\"zipCodeAdd\" name=\"zip\" required autocomplete=\"on\" ng-model=\"address.zipCode\"\n" +
    "          ng-required=\"addressForm.country.$viewValue.id === 'CN'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "          ng-class=\"{'has-error': addressForm.state.$invalid && (addressForm.state.$dirty || showPristineErrors) }\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"provinceAdd\">{{'PROVINCE' | translate}}</label>\n" +
    "          <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "          class=\"form-control\" id=\"provinceAdd\" name=\"state\" required autocomplete=\"on\" ng-model=\"address.state\"\n" +
    "          ng-required=\"addressForm.country.$viewValue.id === 'CN'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "          ng-class=\"{'has-error': addressForm.city.$invalid && (addressForm.city.$dirty || showPristineErrors) }\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"cityAdd\">{{'CITY' | translate}}</label>\n" +
    "          <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "          class=\"form-control\" id=\"cityAdd\" name=\"city\" required autocomplete=\"on\" ng-model=\"address.city\"\n" +
    "          ng-required=\"addressForm.country.$viewValue.id === 'CN'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "          ng-class=\"{'has-error': addressForm.street.$invalid && (addressForm.street.$dirty || showPristineErrors) }\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"streetAdd\">{{'STREET_NAME' | translate}}</label>\n" +
    "          <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "          class=\"form-control\" id=\"streetAdd\" name=\"street\" autocomplete=\"on\" ng-model=\"address.street\"\n" +
    "          ng-required=\"addressForm.country.$viewValue.id === 'CN'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"address2Add\">{{'BUILDING_NAME' | translate}}</label>\n" +
    "          <input type=\"text\" class=\"form-control\" placeholder=\"(Optional)\" id=\"address2Add\" name=\"address2\"\n" +
    "          ng-model=\"address.streetAppendix\">\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- <div class=\"form-group input-group\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"address1Add\">{{'ROOM_NUMBER' | translate}}</label>\n" +
    "          <input type=\"text\" class=\"form-control\" name=\"address1\" placeholder=\"(Optional)\" id=\"address1Add\" ng-model=\"address.address1\">\n" +
    "      </div> -->\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "           ng-class=\"{'has-error': addressForm.contactName.$invalid && (addressForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"contactNameAdd\">{{'FULL_NAME' | translate}}</label>\n" +
    "          <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                  class=\"form-control\" id=\"contactNameAdd\" name=\"contactName\" ng-model=\"address.contactName\"\n" +
    "                 required autocomplete=\"on\" ng-required=\"addressForm.country.$viewValue.id === 'CN'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"companyNameAdd\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"companyNameAdd\"  placeholder=\"(Optional)\" name=\"companyName\" ng-model=\"address.companyName\" autocomplete=\"on\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactPhone\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"contactPhone\" placeholder=\"(Optional)\" name=\"contactPhone\" ng-model=\"address.contactPhone\" autocomplete=\"on\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "\n" +
    "      </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/addAddressDE.html',
    "<div>\n" +
    "\n" +
    "      <div class=\"form-group input-group custom-select-container\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "          <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\">\n" +
    "              <ui-select-match>\n" +
    "                  {{$select.selected.name}}\n" +
    "              </ui-select-match>\n" +
    "              <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                  {{item.name}}\n" +
    "              </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.contactName.$invalid && (addressForm.contactName.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactName\">{{'FULL_NAME' | translate}}</label>\n" +
    "        <input inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" type=\"text\" class=\"form-control ui-autocomplete\" id=\"contactName\" name=\"contactName\" ng-model=\"address.contactName\" required autocomplete=\"on\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'DE'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"companyName\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "          <input type=\"text\" placeholder=\"(Optional)\" class=\"form-control\" id=\"companyName\" name=\"companyName\" ng-model=\"address.companyName\" autocomplete=\"on\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.street.$invalid && (addressForm.street.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"street\">{{'ADDRESS_LINE_1' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"street\" name=\"street\" ng-required=\"addressForm.country.$viewValue.id === 'DE'\"\n" +
    "        ng-model=\"address.street\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.streetAppendix.$invalid && (addressForm.streetAppendix.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"streetAppendix\">{{'ADDRESS_LINE_2' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input class=\"form-control\" id=\"streetAppendix\" name=\"streetAppendix\" placeholder=\"(Optional)\"\n" +
    "        ng-model=\"address.streetAppendix\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.city.$invalid && (addressForm.city.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"city\">{{'CITY' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"city\" name=\"city\" required autocomplete=\"on\"\n" +
    "        ng-model=\"address.city\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'DE'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "          ng-class=\"{'has-error': addressForm.zip.$invalid && (addressForm.zip.$dirty || showPristineErrors) }\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"zipCodeBill\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "          <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "          class=\"form-control\" id=\"zipCodeBill\" name=\"zip\" required autocomplete=\"on\" ng-model=\"address.zipCode\"\n" +
    "          ng-required=\"addressForm.country.$viewValue.id === 'DE'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactPhone\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"contactPhone\" name=\"contactPhone\" ng-model=\"address.contactPhone\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "\n" +
    "      </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/addAddressDefault.html',
    "<!-- address default -->\n" +
    "<div> \n" +
    "      \n" +
    "      <!-- country -->\n" +
    "      <div class=\"checkout-selector\">\n" +
    "        <div class=\"form-group input-group custom-select-container\"\n" +
    "          ng-class=\"{'has-error': !addressForm.country.$viewValue.id && ( addressForm.country.$dirty || showPristineErrors) }\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"country\">{{'COUNTRY' | translate}}</label>\n" +
    "          <ui-select ng-model=\"address.country\" on-select=\"setLocale($item)\" ng-required=\"isDefaultForm\" id=\"country\" name=\"country\" >\n" +
    "              <ui-select-match>\n" +
    "                  {{$select.selected.name}}\n" +
    "              </ui-select-match>\n" +
    "              <ui-select-choices repeat=\"item.id as item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                  {{item.name}}\n" +
    "              </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- full name  -->\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.contactName.$invalid && (addressForm.contactName.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactName\">{{'FULL_NAME' | translate}}</label>\n" +
    "        <input inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" type=\"text\" class=\"form-control ui-autocomplete\" id=\"contactName\" name=\"contactName\" ng-model=\"address.contactName\" required autocomplete=\"on\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$invalid || addressForm.country.$viewValue.id === 'US'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- company name -->\n" +
    "      <div class=\"form-group input-group\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"companyName\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"companyName\" name=\"companyName\" ng-model=\"address.companyName\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- address 1 -->\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.street.$invalid && (addressForm.street.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"street\">{{'ADDRESS_LINE_1' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"street\" name=\"street\" required\n" +
    "        ng-model=\"address.street\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- address 2 -->\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.streetAppendix.$invalid && (addressForm.streetAppendix.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"streetAppendix\">{{'ADDRESS_LINE_2' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input class=\"form-control\" id=\"streetAppendix\" name=\"streetAppendix\" placeholder=\"(Optional)\"\n" +
    "        ng-model=\"address.streetAppendix\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "      \n" +
    "      <!-- city -->\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.city.$invalid && (addressForm.city.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"city\">{{'CITY' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"city\" name=\"city\" autocomplete=\"on\"\n" +
    "        ng-model=\"address.city\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        required>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- state -->\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.state.$invalid && (addressForm.state.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"state\">{{'STATE' | translate}}</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"state\" name=\"state\" autocomplete=\"on\"\n" +
    "        ng-model=\"address.state\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- zip code  -->\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.zipCodeUS.$invalid && (addressForm.zipCodeUS.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"zipCode\">{{'ZIP' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"zipCode\" name=\"zipCodeUS\" autocomplete=\"on\"\n" +
    "        ng-model=\"address.zipCode\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        required>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- contact phone  -->\n" +
    "      <div class=\"form-group input-group\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactPhone\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"contactPhone\" name=\"contactPhone\" ng-model=\"address.contactPhone\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/addAddressGB.html',
    "<div>\n" +
    "\n" +
    "      <div class=\"form-group input-group custom-select-container\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "          <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\">\n" +
    "              <ui-select-match>\n" +
    "                  {{$select.selected.name}}\n" +
    "              </ui-select-match>\n" +
    "              <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                  {{item.name}}\n" +
    "              </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "      </div>\n" +
    "      \n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.contactName.$invalid && (addressForm.contactName.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactName\">{{'FULL_NAME' | translate}}</label>\n" +
    "        <input inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" type=\"text\" class=\"form-control ui-autocomplete\" id=\"contactName\" name=\"contactName\" ng-model=\"address.contactName\" required autocomplete=\"on\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'GB'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"companyName\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"companyName\" name=\"companyName\" ng-model=\"address.companyName\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.street.$invalid && (addressForm.street.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"street\">{{'ADDRESS_LINE_1' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"street\" name=\"street\" ng-required=\"addressForm.country.$viewValue.id === 'GB'\"\n" +
    "        ng-model=\"address.street\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.streetAppendix.$invalid && (addressForm.streetAppendix.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"streetAppendix\">{{'ADDRESS_LINE_2' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input class=\"form-control\" id=\"streetAppendix\" name=\"streetAppendix\"\n" +
    "        ng-model=\"address.streetAppendix\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.city.$invalid && (addressForm.city.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"city\">{{'CITY' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"city\" name=\"city\" required autocomplete=\"on\"\n" +
    "        ng-model=\"address.city\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'GB'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.zipCode.$invalid && (addressForm.zipCode.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"zipCode\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"zipCode\" name=\"zipCode\" required autocomplete=\"on\"\n" +
    "        ng-model=\"address.zipCode\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'GB'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactPhone\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"contactPhone\" name=\"contactPhone\" ng-model=\"address.contactPhone\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "\n" +
    "      </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/addAddressJP.html',
    "<div>\n" +
    "\n" +
    "      <div class=\"form-group input-group custom-select-container\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "          <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\">\n" +
    "              <ui-select-match>\n" +
    "                  {{$select.selected.name}}\n" +
    "              </ui-select-match>\n" +
    "              <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                  {{item.name}}\n" +
    "              </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.contactName.$invalid && (addressForm.contactName.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactName\">{{'FULL_NAME' | translate}}</label>\n" +
    "        <input inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" type=\"text\" class=\"form-control ui-autocomplete\" id=\"contactName\" name=\"contactName\" ng-model=\"address.contactName\" required autocomplete=\"on\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'JP'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"companyName\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"companyName\" name=\"companyName\" ng-model=\"address.companyName\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.street.$invalid && (addressForm.street.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"street\">{{'ADDRESS_LINE_1' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"street\" name=\"street\" ng-required=\"addressForm.country.$viewValue.id === 'JP'\"\n" +
    "        ng-model=\"address.street\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.streetAppendix.$invalid && (addressForm.streetAppendix.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"streetAppendix\">{{'ADDRESS_LINE_2' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input class=\"form-control\" id=\"streetAppendix\" name=\"streetAppendix\"\n" +
    "        ng-model=\"address.streetAppendix\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.city.$invalid && (addressForm.city.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"city\">{{'CITY' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"city\" name=\"city\" required autocomplete=\"on\"\n" +
    "        ng-model=\"address.city\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'JP'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "          ng-class=\"{'has-error': addressForm.state.$invalid && (addressForm.state.$dirty || showPristineErrors) }\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"state\">{{'PREFECTURE' | translate}}</label>\n" +
    "          <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "          class=\"form-control\" id=\"state\" name=\"state\" required autocomplete=\"on\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\" ng-model=\"address.state\"\n" +
    "          ng-required=\"addressForm.country.$viewValue.id === 'JP'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.zipCode.$invalid && (addressForm.zipCode.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"zipCode\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"zipCode\" name=\"zipCode\" required autocomplete=\"on\"\n" +
    "        ng-model=\"address.zipCode\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'JP'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactPhone\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"contactPhone\" name=\"contactPhone\" ng-model=\"address.contactPhone\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "\n" +
    "      </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/addAddressUS.html',
    "<div>\n" +
    "\n" +
    "      <div class=\"checkout-selector\">\n" +
    "        <div class=\"form-group input-group custom-select-container\"\n" +
    "          ng-class=\"{'has-error': addressForm.country.$invalid && ( addressForm.country.$dirty || showPristineErrors) }\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"country\">{{'COUNTRY' | translate}}</label>\n" +
    "          <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\">\n" +
    "              <ui-select-match>\n" +
    "                  {{$select.selected.name}}\n" +
    "              </ui-select-match>\n" +
    "              <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                  {{item.name}}\n" +
    "              </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.contactName.$invalid && (addressForm.contactName.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactName\">{{'FULL_NAME' | translate}}</label>\n" +
    "        <input inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" type=\"text\" class=\"form-control ui-autocomplete\" id=\"contactName\" name=\"contactName\" ng-model=\"address.contactName\" required autocomplete=\"on\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$invalid || addressForm.country.$viewValue.id === 'US'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"companyName\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"companyName\" name=\"companyName\" ng-model=\"address.companyName\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.street.$invalid && (addressForm.street.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"street\">{{'ADDRESS_LINE_1' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"street\" name=\"street\" ng-required=\"addressForm.country.$viewValue.id === 'US'\"\n" +
    "        ng-model=\"address.street\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\" ng-class=\"{'has-error': addressForm.streetAppendix.$invalid && (addressForm.streetAppendix.$dirty  || showPristineErrors)}\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"streetAppendix\">{{'ADDRESS_LINE_2' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input class=\"form-control\" id=\"streetAppendix\" name=\"streetAppendix\" placeholder=\"(Optional)\"\n" +
    "        ng-model=\"address.streetAppendix\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.city.$invalid && (addressForm.city.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"city\">{{'CITY' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"city\" name=\"city\" autocomplete=\"on\"\n" +
    "        ng-model=\"address.city\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'US'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"checkout-selector\">\n" +
    "        <div class=\"form-group input-group custom-select-container\"\n" +
    "          ng-class=\"{'has-error': addressForm.state.$invalid && (addressForm.stateUS.$dirty || showPristineErrors) }\">\n" +
    "          <label class=\"input-group-addon control-label\" for=\"state\">{{'STATE' | translate}}</label>\n" +
    "          <ui-select ng-model=\"address.state\" id=\"state\" name=\"state\" ng-required=\"addressForm.country.$viewValue.id === 'US'\">\n" +
    "              <ui-select-match>\n" +
    "                  {{$select.selected.name}}\n" +
    "              </ui-select-match>\n" +
    "              <ui-select-choices repeat=\"item.id as item in (usStates | filter: $select.search)\">\n" +
    "                  {{item.name}}\n" +
    "              </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\"\n" +
    "        ng-class=\"{'has-error': addressForm.zipCodeUS.$invalid && (addressForm.zipCodeUS.$dirty || showPristineErrors) }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"zipCode\">{{'ZIP' | translate}}</label>\n" +
    "        <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "        class=\"form-control\" id=\"zipCode\" name=\"zipCodeUS\" autocomplete=\"on\"\n" +
    "        ng-model=\"address.zipCode\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\"\n" +
    "        ng-required=\"addressForm.country.$viewValue.id === 'US'\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"form-group input-group\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"contactPhone\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"contactPhone\" name=\"contactPhone\" ng-model=\"address.contactPhone\" autocomplete=\"on\" placeholder=\"(Optional)\" ng-keydown=\"saveOnEnter($event, address, addressForm.$valid, addressForm.$name)\">\n" +
    "      </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/billingCA.html',
    "<!-- billing ca -->\n" +
    "<div>\n" +
    "\n" +
    "    <div ng-hide=\"shipToSameAsBillTo\">\n" +
    "\n" +
    "\n" +
    "    <!-- country -->\n" +
    "    <div class=\"col-md-4 custom-select-container checkout-selector\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.country.$invalid && ( billToForm.country.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"countryBill\">{{'COUNTRY' | translate}}</label>\n" +
    "            <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" id=\"countryBill\" name=\"country\" ng-required=\"!shipToSameAsBillTo\">\n" +
    "                <ui-select-match>\n" +
    "                    {{$select.selected.name}}\n" +
    "                </ui-select-match>\n" +
    "                <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                    {{item.name}}\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- name -->\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "             ng-class=\"{'has-error': billToForm.contactName.$invalid && (billToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactNameBill\">{{'NAME' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                   class=\"form-control\" id=\"contactNameBill\" name=\"contactName\" ng-model=\"order.billTo.contactName\"\n" +
    "                   ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- comany name -->\n" +
    "    <!-- <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"companyNameBill\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"companyNameBill\" name=\"companyName\" ng-model=\"order.billTo.companyName\"\n" +
    "                   autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div> -->\n" +
    "\n" +
    "    <!-- address 1 -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.address1.$invalid && (billToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address1Bill\">{{'ADDRESS' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                    class=\"form-control\" name=\"address1\" id=\"address1Bill\" ng-model=\"order.billTo.address1\"\n" +
    "                    ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- addresss 2 -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address2Bill\">{{'ADDRESS' | translate}} 2</label>\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Bill\" name=\"address2\"\n" +
    "            ng-model=\"order.billTo.address2\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- city -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.city.$invalid && (billToForm.city.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"cityBill\">{{'CITY' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"cityBill\" name=\"city\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.city\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- province -->\n" +
    "    <div class=\"col-md-4 custom-select-container checkout-selector\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.state.$invalid && (billToForm.state.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"state\">{{'PROVINCE' | translate}}</label>\n" +
    "            <ui-select ng-model=\"order.billTo.state\" id=\"stateBill\" name=\"state\" ng-required=\"billToForm.country.$invalid || (!shipToSameAsBillTo && billToForm.country.$viewValue.id === 'CA')\">\n" +
    "                <ui-select-match>\n" +
    "                    {{$select.selected.name}}\n" +
    "                </ui-select-match>\n" +
    "                <ui-select-choices repeat=\"item.id as item in (caProvinces | filter: $select.search)\">\n" +
    "                    {{item.name}}\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- postal code -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.postal.$invalid && (billToForm.postal.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"zipCodeBill\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"zipCodeBill\" name=\"postal\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.zipCode\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- contact phone -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactPhoneBill\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"contactPhoneBill\" name=\"contactPhone\" ng-model=\"order.billTo.contactPhone\"\n" +
    "                   autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/billingCN.html',
    "<!-- billing cn -->\n" +
    "<div>\n" +
    "\n" +
    "    <div ng-hide=\"shipToSameAsBillTo\">\n" +
    "\n" +
    "    <!-- country -->\n" +
    "    <div class=\"col-md-4 custom-select-container\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.country.$invalid && ( billToForm.country.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"countryBill\">{{'COUNTRY' | translate}}</label>\n" +
    "            <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" ng-required=\"!shipToSameAsBillTo\">\n" +
    "                <ui-select-match>\n" +
    "                    {{$select.selected.name}}\n" +
    "                </ui-select-match>\n" +
    "                <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                    {{item.name}}\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- postal code -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.postal.$invalid && (billToForm.postal.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"zipCodeBill\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"zipCodeBill\" name=\"postal\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.zipCode\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- province -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.province.$invalid && (billToForm.province.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"provinceBill\">{{'PROVINCE' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"provinceBill\" name=\"province\" ng-required=\"billToForm.country.$invalid || (!shipToSameAsBillTo && billToForm.country.$viewValue.id === 'CN')\" autocomplete=\"on\" ng-model=\"order.billTo.state\" \n" +
    "            ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- city -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.city.$invalid && (billToForm.city.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"cityBill\">{{'CITY' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"cityBill\" name=\"city\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.city\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- street name -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.streetBill.$invalid && (billToForm.streetBill.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address3Bill\">{{'STREET_NAME' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                class=\"form-control\" id=\"address3Bill\" name=\"streetBill\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "                ng-model=\"order.billTo.address1\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- building name -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address2Bill\">{{'BUILDING_NAME' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Bill\" name=\"address2\"\n" +
    "            ng-model=\"order.billTo.address2\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- name -->\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "             ng-class=\"{'has-error': billToForm.contactName.$invalid && (billToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactNameBill\">{{'NAME' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                   class=\"form-control\" id=\"contactNameBill\" name=\"contactName\" ng-model=\"order.billTo.contactName\"\n" +
    "                   ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- company name -->\n" +
    "    <!-- <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"companyNameBill\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"companyNameBill\" name=\"companyName\" ng-model=\"order.billTo.companyName\"\n" +
    "                   autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div> -->\n" +
    "\n" +
    "    <!-- contact phone -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactPhoneBill\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"contactPhoneBill\" name=\"contactPhone\" ng-model=\"order.billTo.contactPhone\"\n" +
    "                   autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/billingDE.html',
    "<!-- billing DE -->\n" +
    "<div>\n" +
    "\n" +
    "    <div ng-hide=\"shipToSameAsBillTo\">\n" +
    "\n" +
    "    <!-- country -->\n" +
    "    <div class=\"col-md-4 custom-select-container\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.country.$invalid && ( billToForm.country.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"countryBill\">{{'COUNTRY' | translate}}</label>\n" +
    "            <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" ng-required=\"!shipToSameAsBillTo\">\n" +
    "                <ui-select-match>\n" +
    "                    {{$select.selected.name}}\n" +
    "                </ui-select-match>\n" +
    "                <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                    {{item.name}}\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <!-- name -->\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "             ng-class=\"{'has-error': billToForm.contactName.$invalid && (billToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactNameBill\">{{'NAME' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                   class=\"form-control\" id=\"contactNameBill\" name=\"contactName\" ng-model=\"order.billTo.contactName\"\n" +
    "                   ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- company name -->\n" +
    "    <!-- <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"companyNameBill\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"companyNameBill\" name=\"companyName\" ng-model=\"order.billTo.companyName\"\n" +
    "                   autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div> -->\n" +
    "\n" +
    "    <!-- address 1 -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.address1.$invalid && (billToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address1Bill\">{{'ADDRESS' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                   class=\"form-control\" name=\"address1\" id=\"address1Bill\" ng-model=\"order.billTo.address1\"\n" +
    "            ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- address 2 -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address2Bill\">{{'ADDRESS' | translate}} 2</label>\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Bill\" name=\"address2\"\n" +
    "            ng-model=\"order.billTo.address2\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- city -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.city.$invalid && (billToForm.city.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"cityBill\">{{'CITY' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"cityBill\" name=\"city\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.city\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- postal code  -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.postal.$invalid && (billToForm.postal.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"zipCodeBill\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"zipCodeBill\" name=\"postal\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.zipCode\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- contact phone  -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactPhoneBill\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"contactPhoneBill\" name=\"contactPhone\" ng-model=\"order.billTo.contactPhone\"\n" +
    "                   autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/billingDefault.html',
    "<!-- billing default -->\n" +
    "<div>\n" +
    "\n" +
    "    <div ng-hide=\"shipToSameAsBillTo\">\n" +
    "\n" +
    "    <!-- country -->\n" +
    "    <div class=\"col-md-4 custom-select-container checkout-selector\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': !billToForm.country.$viewValue.id && ( billToForm.country.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"countryBill\">{{'COUNTRY' | translate}}</label>\n" +
    "            <ui-select ng-model=\"order.billTo.country\" on-select=\"setLocale($item)\" ng-required=\"!shipToSameAsBillTo\" id=\"countryBill\" name=\"country\">\n" +
    "                <ui-select-match>\n" +
    "                    {{$select.selected.name}}\n" +
    "                </ui-select-match>\n" +
    "                <ui-select-choices repeat=\"item.id as item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                    {{item.name}}\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "    </div>    \n" +
    "\n" +
    "    <!-- name -->\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "             ng-class=\"{'has-error': billToForm.contactName.$invalid && (billToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactNameBill\">{{'NAME' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                   class=\"form-control\" id=\"contactNameBill\" name=\"contactName\" ng-model=\"order.billTo.contactName\"\n" +
    "                   ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- company -->\n" +
    "    <!-- <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"companyNameBill\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"companyNameBill\" name=\"companyName\" ng-model=\"order.billTo.companyName\"\n" +
    "            autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div> -->\n" +
    "\n" +
    "    <!-- address 1 -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.address1.$invalid && (billToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address1Bill\">{{'ADDRESS' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "            class=\"form-control\" name=\"address1\" id=\"address1Bill\" ng-model=\"order.billTo.address1\"\n" +
    "            ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- address 2 -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address2Bill\">{{'ADDRESS' | translate}} 2</label>\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Bill\" name=\"address2\"\n" +
    "            ng-model=\"order.billTo.address2\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- city -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.city.$invalid && (billToForm.city.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"cityBill\">{{'CITY' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"cityBill\" name=\"city\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.city\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- state -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "    	<div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.state.$invalid && (billToForm.state.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"stateBill\">{{'STATE' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"stateBill\" name=\"state\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.state\" ng-change=\"$root.closeCartOnCheckout()\" placeholder=\"({{'OPTIONAL' | translate}})\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- zip code  -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.postal.$invalid && (billToForm.postal.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"zipCodeBill\">{{'ZIP' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"zipCodeBill\" name=\"postal\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.zipCode\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- contact phone -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactPhoneBill\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"contactPhoneBill\" name=\"contactPhone\" ng-model=\"order.billTo.contactPhone\"\n" +
    "                   autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/billingGB.html',
    "<!-- billing bg -->\n" +
    "<div>\n" +
    "\n" +
    "    <div ng-hide=\"shipToSameAsBillTo\">\n" +
    "\n" +
    "    <!-- country -->\n" +
    "    <div class=\"col-md-4 custom-select-container\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.country.$invalid && ( billToForm.country.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"countryBill\">{{'COUNTRY' | translate}}</label>\n" +
    "            <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" ng-required=\"!shipToSameAsBillTo\">\n" +
    "                <ui-select-match>\n" +
    "                    {{$select.selected.name}}\n" +
    "                </ui-select-match>\n" +
    "                <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                    {{item.name}}\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "    </div>    \n" +
    "\n" +
    "    <!-- name -->\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "             ng-class=\"{'has-error': billToForm.contactName.$invalid && (billToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactNameBill\">{{'NAME' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                   class=\"form-control\" id=\"contactNameBill\" name=\"contactName\" ng-model=\"order.billTo.contactName\"\n" +
    "                   ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- company name -->\n" +
    "    <!-- <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"companyNameBill\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"companyNameBill\" name=\"companyName\" ng-model=\"order.billTo.companyName\"\n" +
    "                   autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div> -->\n" +
    "\n" +
    "    <!-- address 1 -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.address1.$invalid && (billToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address1Bill\">{{'ADDRESS' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                   class=\"form-control\" name=\"address1\" id=\"address1Bill\" ng-model=\"order.billTo.address1\"\n" +
    "            ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- address 2 -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address2Bill\">{{'ADDRESS' | translate}} 2</label>\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Bill\" name=\"address2\"\n" +
    "            ng-model=\"order.billTo.address2\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- city -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.city.$invalid && (billToForm.city.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"cityBill\">{{'CITY' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"cityBill\" name=\"city\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.city\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- postal code -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.postal.$invalid && (billToForm.postal.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"zipCodeBill\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"zipCodeBill\" name=\"postal\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.zipCode\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- contact phone -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactPhoneBill\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"contactPhoneBill\" name=\"contactPhone\" ng-model=\"order.billTo.contactPhone\"\n" +
    "                   autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/billingJP.html',
    "<!-- billing jp -->\n" +
    "<div>\n" +
    "\n" +
    "    <div ng-hide=\"shipToSameAsBillTo\">\n" +
    "\n" +
    "    <!-- country -->\n" +
    "    <div class=\"col-md-4 custom-select-container\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.country.$invalid && ( billToForm.country.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"countryBill\">{{'COUNTRY' | translate}}</label>\n" +
    "            <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" ng-required=\"!shipToSameAsBillTo\">\n" +
    "                <ui-select-match>\n" +
    "                    {{$select.selected.name}}\n" +
    "                </ui-select-match>\n" +
    "                <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                    {{item.name}}\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "    </div>    \n" +
    "    \n" +
    "    <!-- name -->\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "             ng-class=\"{'has-error': billToForm.contactName.$invalid && (billToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactNameBill\">{{'NAME' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                   class=\"form-control\" id=\"contactNameBill\" name=\"contactName\" ng-model=\"order.billTo.contactName\"\n" +
    "                   ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- company name -->\n" +
    "    <!-- <div class=\"col-md-8\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"companyNameBill\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"companyNameBill\" name=\"companyName\" ng-model=\"order.billTo.companyName\" autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" \n" +
    "            ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div> -->\n" +
    "\n" +
    "    <!-- postal code  -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.postal.$invalid && (billToForm.postal.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"zipCodeBill\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"zipCodeBill\" name=\"postal\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.zipCode\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- prefecture -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.province.$invalid && (billToForm.province.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"provinceBill\">{{'PREFECTURE' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"provinceBill\" name=\"province\" ng-required=\"billToForm.country.$invalid || (!shipToSameAsBillTo && billToForm.country.$viewValue.id === 'JP')\" autocomplete=\"on\" ng-model=\"order.billTo.state\" \n" +
    "            ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- city village -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.city.$invalid && (billToForm.city.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"cityBill\">{{'CITY_VILLAGE' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"cityBill\" name=\"city\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.city\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- subarea -->\n" +
    "    <div class=\"col-md-4\"\n" +
    "        ng-class=\"{'has-error': billToForm.address2.$invalid && (billToForm.address2.$dirty || showPristineErrors) }\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address2Bill\">{{'SUBAREA' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "            class=\"form-control\" id=\"address2Bill\" name=\"address2\"\n" +
    "            ng-model=\"order.billTo.address2\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- further subarea -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.address1.$invalid && (billToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address1Bill\">{{'FURTHER_SUBAREA' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "            class=\"form-control\" name=\"address1\" id=\"address1Bill\" ng-model=\"order.billTo.address1\"\n" +
    "            ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- contact phone -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactPhoneBill\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"contactPhoneBill\" name=\"contactPhone\" ng-model=\"order.billTo.contactPhone\" autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" \n" +
    "            ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/billingUS.html',
    "<!-- billing us -->\n" +
    "<div>\n" +
    "\n" +
    "    <div ng-hide=\"shipToSameAsBillTo\">\n" +
    "\n" +
    "    <!-- country -->\n" +
    "    <div class=\"col-md-4 custom-select-container checkout-selector\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.country.$invalid && ( billToForm.country.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"countryBill\">{{'COUNTRY' | translate}}</label>\n" +
    "            <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" id=\"countryBill\" name=\"country\" ng-required=\"!shipToSameAsBillTo\">\n" +
    "                <ui-select-match>\n" +
    "                    {{$select.selected.name}}\n" +
    "                </ui-select-match>\n" +
    "                <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                    {{item.name}}\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- name -->\n" +
    "    <div class=\"col-md-8\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "             ng-class=\"{'has-error': billToForm.contactName.$invalid && (billToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactNameBill\">{{'NAME' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                   class=\"form-control\" id=\"contactNameBill\" name=\"contactName\" ng-model=\"order.billTo.contactName\"\n" +
    "                   ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>    \n" +
    "\n" +
    "    <!-- company name -->\n" +
    "    <!-- <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"companyNameBill\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"companyNameBill\" name=\"companyName\" ng-model=\"order.billTo.companyName\"\n" +
    "            autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div> -->\n" +
    "\n" +
    "    <!-- addrss 1 -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.address1.$invalid && (billToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address1Bill\">{{'ADDRESS' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "            class=\"form-control\" name=\"address1\" id=\"address1Bill\" ng-model=\"order.billTo.address1\"\n" +
    "            ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- address 2 -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"address2Bill\">{{'ADDRESS' | translate}} 2</label>\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Bill\" name=\"address2\"\n" +
    "            ng-model=\"order.billTo.address2\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- city -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.city.$invalid && (billToForm.city.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"cityBill\">{{'CITY' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"cityBill\" name=\"city\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.city\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- state -->\n" +
    "    <div class=\"col-md-4 custom-select-container checkout-selector\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.state.$invalid && (billToForm.state.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"stateBill\">{{'STATE' | translate}}</label>\n" +
    "            <ui-select ng-model=\"order.billTo.state\" id=\"stateBill\" name=\"state\" ng-required=\"billToForm.country.$invalid || (!shipToSameAsBillTo && billToForm.country.$viewValue.id === 'US')\">\n" +
    "                <ui-select-match>\n" +
    "                    {{$select.selected.name}}\n" +
    "                </ui-select-match>\n" +
    "                <ui-select-choices repeat=\"item.id as item in (usStates | filter: $select.search)\">\n" +
    "                    {{item.name}}\n" +
    "                </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- zip code  -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\"\n" +
    "            ng-class=\"{'has-error': billToForm.postal.$invalid && (billToForm.postal.$dirty || showPristineErrors) }\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"zipCodeBill\">{{'ZIP' | translate}}</label>\n" +
    "            <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "            class=\"form-control\" id=\"zipCodeBill\" name=\"postal\" ng-required=\"!shipToSameAsBillTo\" autocomplete=\"on\"\n" +
    "            ng-model=\"order.billTo.zipCode\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- contact phone -->\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" for=\"contactPhoneBill\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"contactPhoneBill\" name=\"contactPhone\" ng-model=\"order.billTo.contactPhone\"\n" +
    "                   autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/shippingCA.html',
    "<!-- shipping ca -->\n" +
    "<div>\n" +
    "\n" +
    "    <div id=\"ship-to-fields\">\n" +
    "\n" +
    "        <!-- country -->\n" +
    "        <div class=\"col-md-4 custom-select-container checkout-selector\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "                <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" ng-required=\"true\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected.name}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                        {{item.name}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- full name  -->\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                 ng-class=\"{'has-error': shipToForm.contactName.$invalid && (shipToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactNameShip\">{{'FULL_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                class=\"form-control\" id=\"contactNameShip\" name=\"contactName\" ng-model=\"order.shipTo.contactName\"\n" +
    "                ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>        \n" +
    "\n" +
    "        <!-- company name -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"companyNameShip\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"companyNameShip\" name=\"companyName\" ng-model=\"order.shipTo.companyName\"\n" +
    "                       autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- address 1 -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.address1.$invalid && (shipToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address1Ship\">{{'ADDRESS' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                    class=\"form-control\" name=\"address1\" id=\"address1Ship\" ng-model=\"order.shipTo.address1\"\n" +
    "                    ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- address 2 -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address2Ship\">{{'ADDRESS' | translate}} 2</label>\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Ship\" name=\"address2\"\n" +
    "                ng-model=\"order.shipTo.address2\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- city -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.city.$invalid && (shipToForm.city.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"cityShip\">{{'CITY' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"cityShip\" name=\"city\" ng-required=\"true\" ng-model=\"order.shipTo.city\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- province -->\n" +
    "        <div class=\"col-md-4 custom-select-container checkout-selector\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.state.$invalid && (shipToForm.state.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"stateShip\">{{'PROVINCE' | translate}}</label>\n" +
    "                <ui-select ng-model=\"order.shipTo.state\" id=\"stateShip\" name=\"state\" ng-required=\"shipToForm.country.$viewValue.id === 'CA'\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected.name}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"item.id as item in (caProvinces | filter: $select.search)\">\n" +
    "                        {{item.name}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- postal code -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.zip.$invalid && ( shipToForm.zip.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"zipCodeShip\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" ng-model=\"order.shipTo.zipCode\" name=\"zip\" id=\"zipCodeShip\" autocomplete=\"on\" ng-required=\"true\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- contact phone -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactPhoneShip\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"order.shipTo.contactPhone\" name=\"postal\" id=\"contactPhoneShip\" autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/shippingCN.html',
    "<!-- shipping cn -->\n" +
    "<div>\n" +
    "\n" +
    "    <div id=\"ship-to-fields\">\n" +
    "\n" +
    "        <!-- country -->\n" +
    "        <div class=\"col-md-4 custom-select-container\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "                <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" ng-required=\"true\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected.name}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                        {{item.name}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- postal code -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.zip.$invalid && ( shipToForm.zip.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"zipCodeShip\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" ng-model=\"order.shipTo.zipCode\" name=\"zip\" id=\"zipCodeShip\" autocomplete=\"on\" ng-required=\"true\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <!-- province -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.state.$invalid && (shipToForm.state.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"stateShip\">{{'PROVINCE' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\"\n" +
    "                        id=\"stateShip\" name=\"state\" ng-required=\"true\" ng-model=\"order.shipTo.state\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- city -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.city.$invalid && (shipToForm.city.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"cityShip\">{{'CITY' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\"\n" +
    "                        id=\"cityShip\" name=\"city\" ng-required=\"true\" ng-model=\"order.shipTo.city\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- street name -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.streetShip.$invalid && (shipToForm.streetShip$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address3Ship\">{{'STREET_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                    class=\"form-control\" id=\"address3Ship\" name=\"streetShip\" autocomplete=\"on\" \n" +
    "                    ng-model=\"order.shipTo.address1\" ng-required=\"true\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- building name -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address2Ship\">{{'BUILDING_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Ship\" name=\"address2\"\n" +
    "                ng-model=\"order.shipTo.address2\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- full name  -->\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                 ng-class=\"{'has-error': shipToForm.contactName.$invalid && (shipToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactNameShip\">{{'FULL_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                class=\"form-control\" id=\"contactNameShip\" name=\"contactName\" ng-model=\"order.shipTo.contactName\"\n" +
    "                ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- company name -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"companyNameShip\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"companyNameShip\" name=\"companyName\" ng-model=\"order.shipTo.companyName\"\n" +
    "                       autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- contact phone -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactPhoneShip\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"order.shipTo.contactPhone\" name=\"postal\" id=\"contactPhoneShip\" autocomplete=\"on\"\n" +
    "                        placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/shippingDE.html',
    "<!-- shipping de -->\n" +
    "<div>\n" +
    "\n" +
    "    <div id=\"ship-to-fields\">\n" +
    "\n" +
    "        <!-- country -->\n" +
    "        <div class=\"col-md-4 custom-select-container\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "                <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" ng-required=\"true\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected.name}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                        {{item.name}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <!-- full name  -->\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                 ng-class=\"{'has-error': shipToForm.contactName.$invalid && (shipToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactNameShip\">{{'FULL_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                class=\"form-control\" id=\"contactNameShip\" name=\"contactName\" ng-model=\"order.shipTo.contactName\"\n" +
    "                ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- company name -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"companyNameShip\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"companyNameShip\" name=\"companyName\" ng-model=\"order.shipTo.companyName\"\n" +
    "                       autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- address 1 -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.address1.$invalid && (shipToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address1Ship\">{{'ADDRESS' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                    class=\"form-control\" name=\"address1\" id=\"address1Ship\" ng-model=\"order.shipTo.address1\"\n" +
    "                    ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- address 2 -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address2Ship\">{{'ADDRESS' | translate}} 2</label>\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Ship\" name=\"address2\"\n" +
    "                ng-model=\"order.shipTo.address2\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- city -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.city.$invalid && (shipToForm.city.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"cityShip\">{{'CITY' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"cityShip\" name=\"city\" ng-required=\"true\" ng-model=\"order.shipTo.city\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- postal code -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.zip.$invalid && ( shipToForm.zip.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"zipCodeShip\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" ng-model=\"order.shipTo.zipCode\" name=\"zip\" id=\"zipCodeShip\" autocomplete=\"on\" ng-required=\"true\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- contact phone  -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactPhoneShip\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"order.shipTo.contactPhone\" name=\"postal\" id=\"contactPhoneShip\" autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\"\n" +
    "                ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/shippingDefault.html',
    "<!-- shipping default -->\n" +
    "<div>\n" +
    "\n" +
    "    <div id=\"ship-to-fields\">\n" +
    "\n" +
    "        <!-- country -->\n" +
    "        <div class=\"col-md-4 custom-select-container checkout-selector\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': !shipToForm.country.$viewValue.id && ( shipToForm.country.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"countryShip\">{{'COUNTRY' | translate}}</label>\n" +
    "                <ui-select ng-model=\"order.shipTo.country\" on-select=\"setLocale($item)\" ng-required=\"true\" id=\"countryShip\" name=\"country\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected.name}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"item.id as item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                        {{item.name}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- full name  -->\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                 ng-class=\"{'has-error': shipToForm.contactName.$invalid && (shipToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactNameShip\">{{'FULL_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                class=\"form-control\" id=\"contactNameShip\" name=\"contactName\" ng-model=\"order.shipTo.contactName\"\n" +
    "                ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- company name -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"companyNameShip\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"companyNameShip\" name=\"companyName\" ng-model=\"order.shipTo.companyName\"\n" +
    "                       autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- address 1 -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.address1.$invalid && (shipToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address1Ship\">{{'ADDRESS' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                    class=\"form-control\" name=\"address1\" id=\"address1Ship\" ng-model=\"order.shipTo.address1\"\n" +
    "                    ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- address 2 -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address2Ship\">{{'ADDRESS' | translate}} 2</label>\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Ship\" name=\"address2\"\n" +
    "                    ng-model=\"order.shipTo.address2\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- city -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.city.$invalid && (shipToForm.city.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"cityShip\">{{'CITY' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"cityShip\" name=\"city\" ng-required=\"true\" ng-model=\"order.shipTo.city\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- state -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"stateShip\">{{'STATE' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"stateShip\" name=\"state\" ng-model=\"order.shipTo.state\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\" placeholder=\"({{'OPTIONAL' | translate}})\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- zip code  -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.zip.$invalid && ( shipToForm.zip.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"zipCodeShip\">{{'ZIP' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                class=\"form-control\" id=\"zipCodeShip\" name=\"zip\" ng-required=\"true\" autocomplete=\"on\"\n" +
    "                ng-model=\"order.shipTo.zipCode\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- contact phone -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactPhoneShip\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"order.shipTo.contactPhone\" name=\"postal\" id=\"contactPhoneShip\" autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" \n" +
    "                ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/shippingGB.html',
    "<!-- shipping gb -->\n" +
    "<div>\n" +
    "\n" +
    "    <div id=\"ship-to-fields\">\n" +
    "        \n" +
    "        <!-- country -->\n" +
    "        <div class=\"col-md-4 custom-select-container\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "                <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" ng-required=\"true\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected.name}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                        {{item.name}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- full name  -->\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                 ng-class=\"{'has-error': shipToForm.contactName.$invalid && (shipToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactNameShip\">{{'FULL_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                class=\"form-control\" id=\"contactNameShip\" name=\"contactName\" ng-model=\"order.shipTo.contactName\"\n" +
    "                ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>        \n" +
    "\n" +
    "        <!-- comapny name -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"companyNameShip\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"companyNameShip\" name=\"companyName\" ng-model=\"order.shipTo.companyName\"\n" +
    "                       autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- address 1 -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.address1.$invalid && (shipToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address1Ship\">{{'ADDRESS' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                       class=\"form-control\" name=\"address1\" id=\"address1Ship\" ng-model=\"order.shipTo.address1\"\n" +
    "                ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- address 2 -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address2Ship\">{{'ADDRESS' | translate}} 2</label>\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Ship\" name=\"address2\"\n" +
    "                ng-model=\"order.shipTo.address2\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- city -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.city.$invalid && (shipToForm.city.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"cityShip\">{{'CITY' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\"\n" +
    "                        id=\"cityShip\" name=\"city\" ng-required=\"true\" ng-model=\"order.shipTo.city\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- postal code -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.zip.$invalid && (shipToForm.zip.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"zipCodeShip\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                class=\"form-control\" id=\"zipCodeShip\" name=\"zip\" ng-required=\"true\" autocomplete=\"on\"\n" +
    "                ng-model=\"order.shipTo.zipCode\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- contact phone  -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactPhoneShip\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"order.shipTo.contactPhone\" name=\"postal\" id=\"contactPhoneShip\" autocomplete=\"on\"\n" +
    "                        placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/shippingJP.html',
    "<!-- shipping jp -->\n" +
    "<div>\n" +
    "\n" +
    "    <div id=\"ship-to-fields\">\n" +
    "\n" +
    "                <!-- country -->\n" +
    "        <div class=\"col-md-4 custom-select-container\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "                <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" ng-required=\"true\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected.name}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                        {{item.name}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- full name  -->\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                 ng-class=\"{'has-error': shipToForm.contactName.$invalid && (shipToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactNameShip\">{{'FULL_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                class=\"form-control\" id=\"contactNameShip\" name=\"contactName\" ng-model=\"order.shipTo.contactName\"\n" +
    "                ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- company name -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"companyNameShip\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"companyNameShip\" name=\"companyName\" ng-model=\"order.shipTo.companyName\"\n" +
    "                    autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- postal code -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.zip.$invalid && ( shipToForm.zip.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"zipCodeShip\">{{'POSTAL_CODE' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" ng-model=\"order.shipTo.zipCode\" name=\"zip\" id=\"zipCodeShip\" autocomplete=\"on\" ng-required=\"true\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- prefecture -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.state.$invalid && (shipToForm.state.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"stateShip\">{{'PREFECTURE' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"stateShip\" name=\"state\" ng-required=\"true\" ng-model=\"order.shipTo.state\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- city village -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.city.$invalid && (shipToForm.city.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"cityShip\">{{'CITY_VILLAGE' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"cityShip\" name=\"city\" ng-required=\"true\" ng-model=\"order.shipTo.city\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- subarea -->\n" +
    "        <div class=\"col-md-4\"\n" +
    "            ng-class=\"{'has-error': shipToForm.address2.$invalid && (shipToForm.address2.$dirty || showPristineErrors) }\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address2Ship\">{{'SUBAREA' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                    class=\"form-control\" id=\"address2Ship\" name=\"address2\"\n" +
    "                    ng-model=\"order.shipTo.address2\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- further subarea -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.address1.$invalid && (shipToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address1Ship\">{{'FURTHER_SUBAREA' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                    class=\"form-control\" name=\"address1\" id=\"address1Ship\" ng-model=\"order.shipTo.address1\"\n" +
    "                    autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- contact phone  -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactPhoneShip\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"order.shipTo.contactPhone\" name=\"phoneShip\" id=\"contactPhoneShip\" autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" \n" +
    "                ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/addresses/templates/shippingUS.html',
    "<!-- shipping us -->\n" +
    "<div>\n" +
    "\n" +
    "    <div id=\"ship-to-fields\">\n" +
    "\n" +
    "        <!-- country -->\n" +
    "        <div class=\"col-md-4 custom-select-container checkout-selector\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.country.$invalid && ( shipToForm.country.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"addressLocale\">{{'COUNTRY' | translate}}</label>\n" +
    "                <ui-select ng-model=\"localeSelection.selected\" on-select=\"changeLocale($item)\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" ng-required=\"true\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected.name}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"item in (localeSelections | filter: $select.search) track by item.id\">\n" +
    "                        {{item.name}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- full name  -->\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                 ng-class=\"{'has-error': shipToForm.contactName.$invalid && (shipToForm.contactName.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactNameShip\">{{'FULL_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                class=\"form-control\" id=\"contactNameShip\" name=\"contactName\" ng-model=\"order.shipTo.contactName\"\n" +
    "                ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- company name -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"companyNameShip\">{{'COMPANY_NAME' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"companyNameShip\" name=\"companyName\" ng-model=\"order.shipTo.companyName\"\n" +
    "                       autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- address 1 -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.address1.$invalid && (shipToForm.address1.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address1Ship\">{{'ADDRESS' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                    class=\"form-control\" name=\"address1\" id=\"address1Ship\" ng-model=\"order.shipTo.address1\"\n" +
    "                    ng-required=\"true\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- address 2 -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"address2Ship\">{{'ADDRESS' | translate}} 2</label>\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"({{'OPTIONAL' | translate}})\" id=\"address2Ship\" name=\"address2\"\n" +
    "                    ng-model=\"order.shipTo.address2\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- city -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.city.$invalid && (shipToForm.city.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"cityShip\">{{'CITY' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" class=\"form-control\" id=\"cityShip\" name=\"city\" ng-required=\"true\" ng-model=\"order.shipTo.city\" autocomplete=\"on\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- state -->\n" +
    "        <div class=\"col-md-4 custom-select-container checkout-selector\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.state.$invalid && (shipToForm.state.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"stateShip\">{{'STATE' | translate}}</label>\n" +
    "                <ui-select ng-model=\"order.shipTo.state\" id=\"stateShip\" name=\"state\" ng-required=\"shipToForm.country.$invalid || shipToForm.country.$viewValue.id === 'US'\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected.name}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"item.id as item in (usStates | filter: $select.search)\">\n" +
    "                        {{item.name}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- zip code -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.zip.$invalid && ( shipToForm.zip.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"zipCodeShip\">{{'ZIP' | translate}}</label>\n" +
    "                <input type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                class=\"form-control\" id=\"zipCodeShip\" name=\"zip\" ng-required=\"true\" autocomplete=\"on\"\n" +
    "                ng-model=\"order.shipTo.zipCode\" ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- contact phone -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"contactPhoneShip\">{{'CONTACT_PHONE' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"order.shipTo.contactPhone\" name=\"postal\" id=\"contactPhoneShip\" autocomplete=\"on\" placeholder=\"({{'OPTIONAL' | translate}})\" \n" +
    "                ng-change=\"$root.closeCartOnCheckout()\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/auth/templates/auth.html',
    "<!-- close modal -->\n" +
    "<div class=\"closeModalButton\">\n" +
    "    <div class=\"glyphicon glyphicon-remove popoverCloseBtn pull-right\" aria-hidden=\"true\" ng-click=\"closeDialog()\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<section stop-event=\"touchend\">\n" +
    "\n" +
    "    <!-- Nav tabs -->\n" +
    "    <ul class=\"nav nav-tabs signInTabs text-center\" role=\"tablist\">\n" +
    "      <li class=\"active signInButton\"><a href=\"#signin\" role=\"tab\" data-toggle=\"tab\">{{'SIGN_IN' | translate}}</a></li>\n" +
    "      <li><a id=\"create-account\" href=\"#signup\" role=\"tab\" data-toggle=\"tab\">{{'CREATE_ACCOUNT' | translate}}</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <!-- clear row -->\n" +
    "    <div class=\"clr\"><!-- --></div>\n" +
    "\n" +
    "    <!-- tab content -->\n" +
    "    <div class=\"tab-content\">\n" +
    "\n" +
    "      <div class=\"tab-pane active\" id=\"signin\" >\n" +
    "\n" +
    "        <p class=\"error\" ng-show=\"!cookiesEnabled\">{{'COOKIES_ENABLED_ERROR' | translate}}</p>\n" +
    "\n" +
    "        <!-- sign in form -->\n" +
    "        <div ng-include=\"'js/app/auth/templates/signin.html'\" ></div>\n" +
    "\n" +
    "        <!-- fb and google login opions -->\n" +
    "        <div ng-if=\"(fbAppId || googleClientId) && cookiesEnabled\">\n" +
    "\n" +
    "          <div class=\"row\">\n" +
    "\n" +
    "            <!-- fb login button -->\n" +
    "            <div class=\"col-md-6 col-xs-6\">\n" +
    "              <div class=\"socialMediaSigninContainer \">\n" +
    "                <div ng-if=\"fbAppId\" ng-click=\"fbLogin()\">\n" +
    "                    <div class=\"fbLogin\">\n" +
    "                      <div class=\"fbsignInLabel\">{{'SIGN_IN_WITH_FACEBOOK' | translate}}</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "              </div>              \n" +
    "            </div>\n" +
    "\n" +
    "            <!-- google login button -->\n" +
    "            <div class=\"col-md-6 col-xs-6\">\n" +
    "              <div class=\"socialMediaSigninContainer\">\n" +
    "                <div ng-if=\"googleClientId\"  class=\"googlePlusLogin\">\n" +
    "                  <div class=\"googleSignIn\" ng-click=\"googleLogin()\">\n" +
    "                    <div class=\"googleSignInLabel\">{{'LOG_IN_WITH_GOOGLE' | translate}}</div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "      \n" +
    "      <!-- sign up form -->\n" +
    "      <div class=\"tab-pane\" id=\"signup\" >\n" +
    "        <p class=\"error\" ng-show=\"showCreateAccountErrMsg\">{{'CREATE_ACCOUNT_ERROR' | translate}}</p>\n" +
    "        <div ng-include=\"'js/app/auth/templates/signup.html'\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- checkout as guest -->\n" +
    "    <div class=\"continue-as-guest-section\" ng-if=\"showAsGuest\">\n" +
    "\n" +
    "      <!-- seperator -->\n" +
    "      <div class=\"seperatorLine\">\n" +
    "        <p class=\"subtitle lineContainer\"><span>Or</span></p>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- button -->\n" +
    "      <a id=\"guest-continue\" href=\"\" ng-click=\"continueAsGuest()\" class=\"btn btn-primary btn-lg btn-block\">{{'CONTINUE_AS_GUEST' | translate}}</a>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</section>\n"
  );


  $templateCache.put('js/app/auth/templates/check-email.html',
    "<section>\n" +
    "\n" +
    "	<div class=\"page-header\">\n" +
    "	<h2>{{'CHECK_EMAIL' | translate }}</h2>\n" +
    "	<p>{{'CHECK_EMAIL_INSTRUCT' | translate }}</p>\n" +
    "	</div>\n" +
    "\n" +
    "</section>\n"
  );


  $templateCache.put('js/app/auth/templates/password-request-reset.html',
    "<section class=\"resetPasswordModal\" stop-event=\"touchend\">\n" +
    "	<div class=\"page-header\">\n" +
    "        <div class=\"glyphicon glyphicon-remove pull-right hidden-lg hidden-md\" aria-hidden=\"true\" ng-click=\"closeDialog()\"></div>\n" +
    "        <h3>{{ title | translate}}</h3>\n" +
    "        <p>{{ instructions | translate}}</p>\n" +
    "	</div>\n" +
    "	<form name=\"resetPwForm\" novalidate>\n" +
    "	    <div class=\"form-group input-group\" ng-class=\"{'has-error': resetPwForm.password.$invalid &&  resetPwForm.password.$dirty}\">\n" +
    "          <span class=\"input-group-addon\"><label class=\"control-label\" for=\"usernameInput\">{{'ACCOUNT_EMAIL' | translate}}</label></span>\n" +
    "            <input builder-input=\"email\" type=\"email\" class=\"form-control\" id=\"usernameInput\" ng-model=\"email\"\n" +
    "                   name=\"username\" required ng-keydown=\"clearErrors()\">\n" +
    "	    </div>\n" +
    "        <div class=\"error\" ng-show=\"message\" >\n" +
    "            <small class=\"help-inline has-error\">\n" +
    "                <span class=\"error\">{{ message | translate }}</span>\n" +
    "            </small>\n" +
    "        </div>\n" +
    "	  <button ng-click=\"requestPasswordReset(email)\" type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" ng-disabled=\"resetPwForm.$invalid\">\n" +
    "          {{'RESET_PASSWORD' | translate}}</button>\n" +
    "	</form>\n" +
    "</section>\n"
  );


  $templateCache.put('js/app/auth/templates/password-reset.html',
    "<section>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-push-3 col-sm-5\">\n" +
    "            <div class=\"page-header\">\n" +
    "                <h1>{{'RESET_PW_TITLE' | translate}}</h1>\n" +
    "            </div>\n" +
    "            <form name=\"changePwForm\" novalidate>\n" +
    "                <div class=\"form-group input-group\"\n" +
    "                     ng-class=\"{'has-error': changePwForm.password.$touched && changePwForm.password.$invalid &&  changePwForm.password.$dirty}\">\n" +
    "\n" +
    "                    <span class=\"input-group-addon\">\n" +
    "                        <label class=\"control-label\" for=\"passwordInput\">\n" +
    "                            {{'NEW_PASSWORD' | translate}}\n" +
    "                        </label>\n" +
    "                    </span>\n" +
    "                    <input builder-input=\"password\" type=\"password\" class=\"form-control\" id=\"passwordInput\" name=\"password\" placeholder=\"{{'PASSWORD_MINCHAR'| translate}}\"\n" +
    "                           ng-model=\"password\" required min=\"6\" ng-minlength=\"6\">\n" +
    "                </div>\n" +
    "                <div class=\"text-danger list-unstyled\" ng-show=\"changePwForm.password.$touched && changePwForm.password.$invalid && changePwForm.password.$dirty\">\n" +
    "                    <small class=\"help-inline has-error\">\n" +
    "                        <span class=\"error\">{{'PASSWORD_REQUIRED' | translate}}</span>\n" +
    "                    </small>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"form-group input-group\"\n" +
    "                     ng-class=\"{'has-error': changePwForm.confirmPassword.$touched && changePwForm.confirmPassword.$invalid &&  changePwForm.confirmPassword.$dirty}\">\n" +
    "\n" +
    "                    <span class=\"input-group-addon\">\n" +
    "                        <label class=\"control-label\" for=\"passwordInputRepeat\">\n" +
    "                            {{'CONFIRM_NEW_PASSWORD' | translate}}\n" +
    "                        </label>\n" +
    "                    </span>\n" +
    "                    <input builder-input=\"password\" type=\"password\" class=\"form-control\" id=\"passwordInputRepeat\" name=\"confirmPassword\"\n" +
    "                           ng-model=\"passwordRepeat\" confirm-input=\"passwordInput\" required>\n" +
    "                </div>\n" +
    "                <div class=\"text-danger list-unstyled\" ng-show=\"changePwForm.confirmPassword.$touched && changePwForm.confirmPassword.$invalid && changePwForm.confirmPassword.$dirty\">\n" +
    "                    <small class=\"help-inline has-error\">\n" +
    "                        {{'PASSWORDS_MUST_MATCH' | translate}}\n" +
    "                    </small>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "                <div class=\"text-danger list-unstyled\" ng-show=\"error.message\">\n" +
    "\n" +
    "                    <small class=\"help-inline has-error\">\n" +
    "                        {{ error.message | translate}}  {{error.details || ''}}\n" +
    "                    </small>\n" +
    "                </div>\n" +
    "                <button ng-click=\"showAllErrors() && changePwForm.$valid && changePassword(token, password)\" type=\"submit\"\n" +
    "                        class=\"btn btn-primary btn-lg btn-block\" ng-disabled=\"submitDisabled || changePwForm.$invalid\">\n" +
    "                    {{'RESET_PASSWORD' | translate }}\n" +
    "                </button>\n" +
    "                <br>\n" +
    "                <a ng-show=\"showRetryLink\" ng-click=\"showRequestPasswordReset()\" class=\"forgot-password-btn\">{{'RESET_PW_REPEAT' | translate }}</a>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('js/app/auth/templates/password-update.html',
    "<!-- Modal -->\n" +
    "<form name=\"passwordUpdateForm\" novalidate>\n" +
    "    <div class=\"modal-header\">\n" +
    "        <a class=\"close\" ng-click=\"close()\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></a>\n" +
    "        <h4 class=\"modal-title\" id=\"myModalLabel\">{{'UPDATE_PASSWORD' | translate}}</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\" stop-event=\"touchend\">\n" +
    "        <!-- Errors -->\n" +
    "        <ul ng-if=\"errors && errors.length\" class=\"list-unstyled text-danger\">\n" +
    "            <li ng-repeat=\"error in errors\">{{error.message | translate}}</li>\n" +
    "        </ul>\n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <span class=\"input-group-addon\"><label class=\"control-label\" for=\"currentPassword\">{{'CURRENT_PASSWORD' | translate}}</label></span>\n" +
    "            <input builder-input=\"password\" type=\"password\" class=\"form-control ui-autocomplete\" id=\"currentPassword\" name=\"currentPassword\"\n" +
    "                   ng-model=\"passwordModel.currentPassword\" />\n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        <ul class=\"list-unstyled text-danger\" ng-show=\"passwordUpdateForm.newPassword.$touched &&  passwordUpdateForm.newPassword.$invalid && passwordUpdateForm.newPassword.$dirty\">\n" +
    "            <li ng-if=\"!passwordModel.newPassword || passwordModel.newPassword == ''\" class=\"has-error\">\n" +
    "                {{'FIELD_REQUIRED' | translate}}\n" +
    "            </li>\n" +
    "            <li ng-if=\"!passwordModel.newPassword || passwordModel.newPassword.length < 6\" class=\"has-error\">\n" +
    "                {{'PASSWORD_TOO_SHORT' | translate}}\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <div class=\"form-group input-group\"\n" +
    "             ng-class=\"{'has-error': passwordUpdateForm.newPassword.$touched &&  passwordUpdateForm.newPassword.$invalid && passwordUpdateForm.newPassword.$dirty}\">\n" +
    "            <span class=\"input-group-addon\"><label class=\"control-label\" for=\"newPassword\">{{'NEW_PASSWORD' | translate}}</label></span>\n" +
    "            <input builder-input=\"password\" type=\"password\" class=\"form-control ui-autocomplete\" id=\"newPassword\" name=\"newPassword\"\n" +
    "                   ng-model=\"passwordModel.newPassword\" required ng-minlength=\"6\"\n" +
    "                   placeholder=\"{{'PASSWORD_MINCHAR'| translate}}\" />\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <ul class=\"list-unstyled text-danger\" ng-show=\"(passwordUpdateForm.confirmNewPassword.$touched  && passwordModel.newPassword != passwordModel.confirmNewPassword) ||\n" +
    "             (passwordUpdateForm.confirmNewPassword.$touched && passwordUpdateForm.confirmNewPassword.$invalid && passwordUpdateForm.confirmNewPassword.$dirty)\">\n" +
    "            <li ng-if=\"passwordModel.newPassword != passwordModel.confirmNewPassword\" class=\"has-error\"> {{'PASSWORDS_NO_MATCH' | translate}}</li>\n" +
    "            <li ng-if=\"passwordModel.confirmNewPassword || passwordModel.confirmNewPassword.length < 6\" class=\"has-error\">{{'PASSWORD_TOO_SHORT' | translate}}</li>\n" +
    "        </ul>\n" +
    "        <div class=\"form-group input-group\"\n" +
    "             ng-class=\"{'has-error': passwordUpdateForm.confirmNewPassword.$touched && passwordUpdateForm.confirmNewPassword.$invalid && passwordUpdateForm.confirmNewPassword.$dirty}\">\n" +
    "            <span class=\"input-group-addon\"><label class=\"control-label\" for=\"confirmNewPassword\">{{'CONFIRM_NEW_PASSWORD' | translate}}</label></span>\n" +
    "            <input builder-input=\"password\" type=\"password\" class=\"form-control ui-autocomplete\" id=\"confirmNewPassword\" name=\"confirmNewPassword\" ng-model=\"passwordModel.confirmNewPassword\" required ng-minlength=\"6\" />\n" +
    "        </div>\n" +
    "\n" +
    "      \n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"submit\" ng-click=\"updatePassword(passwordModel.currentPassword, passwordModel.newPassword)\" id=\"update-password-btn\"\n" +
    "                class=\"btn btn-warning btn-lg btn-block\" ng-disabled=\"passwordUpdateForm.$invalid || submitDisabled || passwordModel.newPassword != passwordModel.confirmNewPassword\">\n" +
    "            {{'SAVE'|translate}}\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/app/auth/templates/pw-change-success.html',
    "<section>\n" +
    "\n" +
    "	<div class=\"page-header\">\n" +
    "	<h2>{{'PW_SUCCESS' | translate}}</h2>\n" +
    "	<p>{{'PW_CHANGED_MSG' | translate}}</p>\n" +
    "	</div>\n" +
    "\n" +
    "</section>\n"
  );


  $templateCache.put('js/app/auth/templates/signin.html',
    "<!-- signin form -->\n" +
    "<form name=\"singinForm\" ng-submit=\"signin(user.signin, singinForm)\">\n" +
    "    \n" +
    "    <!-- email address -->\n" +
    "    <div class=\"form-group input-group\" ng-class=\"{ 'has-error': singinForm.username.$invalid && singinForm.username.$dirty }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"usernameInput\">{{'EMAIL' | translate}}</label>\n" +
    "        <input builder-input=\"email\" type=\"email\" class=\"form-control\" id=\"usernameInput\" name=\"username\"\n" +
    "               ng-model=\"user.signin.email\" required ng-focus=\"clearErrors()\">\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- password -->\n" +
    "    <div class=\"form-group input-group\" ng-class=\"{ 'has-error': singinForm.password.$invalid && singinForm.password.$dirty }\">\n" +
    "        <label class=\"input-group-addon control-label\" for=\"passwordInput\">{{'PASSWORD' | translate}}</label>\n" +
    "        <input builder-input=\"password\" type=\"password\" class=\"form-control\" id=\"passwordInput\" name=\"password\"\n" +
    "               ng-model=\"user.signin.password\" required ng-focus=\"clearErrors()\">\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- error message -->\n" +
    "    <ul ng-if=\"errors && errors.signin.length\" class=\"list-unstyled text-danger\">\n" +
    "        <li ng-repeat=\"error in errors.signin\">{{error.message | translate}}</li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <!-- sign in button -->\n" +
    "    <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" id=\"sign-in-button\" ng-disabled=\"!cookiesEnabled\">{{'SIGN_IN' | translate}}</button>\n" +
    "    <a ng-click=\"showResetPassword()\" class=\"forgot-password-btn pull-right\">{{'FORGOT_PASSWORD' | translate }}</a>\n" +
    "\n" +
    "    <!-- clear row -->\n" +
    "    <div class=\"clr\"><!-- --></div>\n" +
    "\n" +
    "</form>\n"
  );


  $templateCache.put('js/app/auth/templates/signup.html',
    "<form name=\"singupForm\" ng-submit=\"signup(user.signup, singupForm)\">\n" +
    "  <div class=\"form-group input-group\">\n" +
    "    <label class=\"input-group-addon control-label\" for=\"emailInput\">{{'EMAIL' | translate}}</label>\n" +
    "      <input builder-input=\"email\" type=\"email\" class=\"form-control\" id=\"emailInput\" name=\"email\"\n" +
    "             ng-model=\"user.signup.email\" required ng-focus=\"clearErrors()\">\n" +
    "  </div>\n" +
    "  <div class=\"form-group input-group\">\n" +
    "    <label class=\"input-group-addon control-label\" for=\"newPasswordInput\">{{'PASSWORD' | translate}}</label>\n" +
    "      <input builder-input=\"password\" type=\"password\" class=\"form-control\" id=\"newPasswordInput\" placeholder=\"{{'PASSWORD_MINCHAR'| translate}}\" name=\"password\"\n" +
    "             ng-model=\"user.signup.password\" required ng-focus=\"clearErrors()\">\n" +
    "  </div>\n" +
    "  \n" +
    "   <div ng-include class=\"padding-none\" src=\"'js/app/loyalty/templates/signup_for_loyalty_program.html'\"></div>\n" +
    "  \n" +
    "    <ul ng-if=\"errors && errors.signup.length\" class=\"text-danger list-unstyled\">\n" +
    "        <li ng-repeat=\"error in errors.signup\">{{error.message | translate}}</li>\n" +
    "    </ul>\n" +
    "  <button type=\"submit\" id=\"create-acct-btn\" ng-disabled=\"submitDisabled\" class=\"btn btn-primary btn-lg btn-block\">{{'CREATE_ACCOUNT' | translate}}</button>\n" +
    "</form>"
  );


  $templateCache.put('js/app/cart/templates/cart-costs.html',
    "<table class=\"table\">\n" +
    "    <thead>\n" +
    "        <!-- cart header -->\n" +
    "        <tr class=\"cart-header\">\n" +
    "            <th>{{'EST_ORDER_TOTAL' | translate}}</th>\n" +
    "            <th class=\"text-right\">{{cart.totalPrice.amount | currency: currencySymbol}}</th>\n" +
    "        <tr>\n" +
    "    </thead>\n" +
    "    <tbody class=\"cart-cost\">\n" +
    "        <!-- cart costs -->\n" +
    "        <tr>\n" +
    "            <td colspan=\"2\">\n" +
    "                <!-- empty row for padding -->\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <!-- sub total -->\n" +
    "        <tr >\n" +
    "            <td>\n" +
    "                {{'SUBTOTAL' | translate}} ( {{cart.totalUnitsCount || 0}} {{'ITEM' | translate}}{{cart.totalUnitsCount == 1 ? '' :'s'}} )\n" +
    "            </td>\n" +
    "            <td class=\"text-right\">\n" +
    "                {{cart.subTotalPrice.amount | currency: currencySymbol}}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        \n" +
    "        <!-- discount -->\n" +
    "        <tr ng-if=\"cart.discounts.length\" >\n" +
    "            <td>{{'DISCOUNT' | translate}}</td>\n" +
    "            <td class=\"discount text-right\">\n" +
    "                <span class=\"error\">-{{cart.totalDiscount.amount | currency: currencySymbol}}</span>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <!-- shipping -->\n" +
    "        <tr >\n" +
    "            <td>{{'SHIPPING' | translate}}</td>\n" +
    "            <td class=\"text-right\">{{ cart.shipping.fee.amount | currency: currencySymbol }}</td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <!-- additional shipping -->\n" +
    "        <tr >\n" +
    "            <td class=\"additionalshipinfo\" colspan=\"2\">{{'ADDITIONAL_SHIPPING_OPTIONS' | translate}}</td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <!-- tax estimator -->\n" +
    "        <tr ng-show=\"!!taxType && taxType !== 'FLATRATE'\" >\n" +
    "            <td class=\"estimate-tax-link\" colspan=\"2\">\n" +
    "                <a id=\"tax-estimation-link\" href=\"\" ng-click=\"showTaxEstimation=!showTaxEstimation\">\n" +
    "                    {{'ESTIMATE_TAX'|translate}}\n" +
    "                    <span ng-show=\"!showTaxEstimation\" class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span>\n" +
    "                    <span ng-show=\"showTaxEstimation\" class=\"glyphicon glyphicon-chevron-up\" aria-hidden=\"true\"></span>\n" +
    "                </a>\n" +
    "\n" +
    "                <!-- tax estimator -->\n" +
    "                <div class=\"row cartTaxConfiguration\" ng-show=\"!!taxType && taxType !== 'FLATRATE' && showTaxEstimation\">\n" +
    "                    <div class=\"col-xs-5\">\n" +
    "                        <input id=\"zipCode\" type=\"text\" class=\"zip-input form-control\" ng-model=\"calculateTax.zipCode\" placeholder=\"Zip/Postal Code\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-5 custom-select-container\">\n" +
    "                        <!--<select id=\"country\" class=\"zip-input form-control\" ng-model=\"calculateTax.countryCode\" ng-options=\"countryCodeOption.text for countryCodeOption in countryCodeOptions track by countryCodeOption.value\"></select>-->\n" +
    "                        <!--<p>{{calculateTax.countryCode}}</p>-->\n" +
    "                        <ui-select ng-model=\"calculateTax.countryCode\">\n" +
    "                            <ui-select-match>\n" +
    "                                {{$select.selected.name}}\n" +
    "                            </ui-select-match>\n" +
    "                            <ui-select-choices repeat=\"taxCountry.id as taxCountry in (taxableCountries | filter: $select.search)\">\n" +
    "                                {{taxCountry.name}}\n" +
    "                            </ui-select-choices>\n" +
    "                        </ui-select>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-2\">\n" +
    "                        <button id=\"apply-btn\" class=\"apply-tax btn btn-link\" ng-click=\"applyTax()\">{{'APPLY'|translate}}</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "                <!-- tax error -->\n" +
    "                <div class=\"row\" ng-show=\"!!taxType && taxType !== 'FLATRATE' && taxEstimationError\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        {{'ESTIMATE_TAX_ERROR'|translate}}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "                <!-- /tax estimator -->\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "\n" +
    "        <!-- tax display -->\n" +
    "        <tr ng-repeat=\"taxLine in cart.taxAggregate.lines\" ng-show=\"!!taxConfiguration && !taxConfiguration.included && !!cart.totalTax && taxType === 'FLATRATE'\" >\n" +
    "            <td ng-if=\"taxLine.name\">{{taxLine.name}}</td>\n" +
    "            <td ng-if=\"!taxLine.name\">{{'TAX' | translate}}</td>\n" +
    "            <td class=\"text-right\">\n" +
    "                {{taxLine.amount | currency: currencySymbol}}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        \n" +
    "\n" +
    "        <tr ng-show=\"calculateTax.taxCalculationApplied && taxType !== 'FLATRATE'\" >\n" +
    "            <td>{{'TAX' | translate}}</td>\n" +
    "            <td id=\"total-tax\" class=\"text-right\">\n" +
    "                {{cart.totalTax.amount | currency: currencySymbol}}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td colspan=\"2\">\n" +
    "                <!-- empty row for padding -->\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "        \n" +
    "\n"
  );


  $templateCache.put('js/app/cart/templates/cart.html',
    "<!--\n" +
    "  ~ [y] hybris Platform\n" +
    "  ~\n" +
    "  ~ Copyright (c) 2000-2014 hybris AG\n" +
    "  ~ All rights reserved.\n" +
    "  ~\n" +
    "  ~ This software is the confidential and proprietary information of hybris\n" +
    "  ~ (\"Confidential Information\"). You shall not disclose such Confidential\n" +
    "  ~ Information and shall use it only in accordance with the terms of the\n" +
    "  ~ license agreement you entered into with hybris.\n" +
    "  -->\n" +
    "<div cart-auto-toggle class=\"cartContainer\" ng-mouseenter=\"cartHover()\" ng-mouseleave=\"cartUnHover()\">\n" +
    "\n" +
    "    <!-- shop or checkout -->\n" +
    "    <div class=\"btn-group btn-group-justified\">\n" +
    "\n" +
    "        <!-- continue shopping button -->\n" +
    "        <div class=\"btn-group continue\">\n" +
    "            <button id=\"continue-shopping\" ng-click=\"toggleCart()\" class=\"btn  btn-default continue\">\n" +
    "                <span class=\"hyicon hyicon-chevron-thin-left\"></span>\n" +
    "                <span class=\"hidden-xs\">{{'CONTINUE_SHOPPING' | translate}}</span>\n" +
    "                <span class=\"hidden-sm hidden-md hidden-lg\">{{'SHOP' | translate}}</span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- checkout button -->\n" +
    "        <div class=\"btn-group checkout\">\n" +
    "            <button ng-if=\"cart.items.length\" ng-click=\"toCheckoutDetails()\" class=\"btn  btn-primary \">{{'CHECKOUT' | translate}} <span class=\"hyicon hyicon-chevron-thin-right\"></span>\n" +
    "            </button>\n" +
    "            <button ng-if=\"!cart.items.length\" ng-class=\"{ disabled: !cart.items.length }\" class=\"btn\">{{'CHECKOUT' | translate}}\n" +
    "            </button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- empty cart message -->\n" +
    "    <div ng-if=\"!cart.error && !cart.items.length\" class=\"empty-cart-text text-center\">\n" +
    "        {{'CART_EMPTY' | translate}}\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- cart unavialable message  -->\n" +
    "    <div ng-if=\"cart.error\" class=\"error text-center\">\n" +
    "        {{'CART_UNAVAILABLE' | translate}}\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"cart.items.length\">\n" +
    "\n" +
    "        <section class=\"summary\">\n" +
    "\n" +
    "            <!-- cart cost -->\n" +
    "            <div ng-include=\"'js/app/cart/templates/cart-costs.html'\"></div>\n" +
    "\n" +
    "            <!-- Apply Coupon -->\n" +
    "            <div ng-include=\"'js/app/coupons/templates/coupon-apply.html'\" ng-controller=\"CouponCtrl\" class=\"couponWrapper\"></div>\n" +
    "\n" +
    "      <section class=\"reward-points-earned\" >\n" +
    "        <div class=\"reward-on-cart\" ng-include src=\"'js/app/loyalty/templates/cart_details.html'\"></div>  \n" +
    "        </section>\n" +
    "\n" +
    "        <section>\n" +
    "\n" +
    "            <!-- Cart Item -->\n" +
    "            <div\n" +
    "            ng-repeat=\"item in cart.items\"\n" +
    "            ng-controller=\"CartNoteMixinCtrl\">\n" +
    "\n" +
    "                <!-- error message -->\n" +
    "                <div ng-if=\"item.error\" class=\"error col-xs-12 col-md-12\">\n" +
    "                    <span class=\"error\">{{'CART_ITEM_UPDATE_ERROR' | translate}}</span>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"cart-item row\">\n" +
    "\n" +
    "                    <!-- product img -->\n" +
    "                    <div class=\"col-xs-3 col-md-4 text-center img-col\">\n" +
    "                        <img ng-src=\"{{ item && item.product.images[0].url || ''}}\" class=\"img-responsive\" />\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                    <div class=\"col-xs-8 col-md-8  detail-col\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-xs-10\">\n" +
    "\n" +
    "                                <!-- product name -->\n" +
    "                                <div class=\"product-item-name name\">{{item.product.name}}</div>\n" +
    "\n" +
    "                                <ul ng-if=\"item.variants\" class=\"list-unstyled\">\n" +
    "                                    <li ng-repeat=\"variant in item.variants track by $index\">{{variant}}</li>\n" +
    "                                </ul>\n" +
    "\n" +
    "                                <!-- product price -->\n" +
    "                                <div class=\"price item-attr\">\n" +
    "                                    {{'ITEM_PRICE' | translate}}: <span>{{item.price.effectiveAmount | currency: currencySymbol}}</span>\n" +
    "                                    <span class=\"priceUnit\" ng-if=\"item.price.measurementUnit\">{{item.price.measurementUnit.quantity}} {{item.price.measurementUnit.unit}}</span>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <!-- product quantity -->\n" +
    "                                <div class=\"clearfix\">\n" +
    "                                    <div class=\"input-group pull-left\" ng-class=\"{error: item.error}\">\n" +
    "                                        <label class=\"input-group-addon\" for=\"qtyCart\">{{'QTY' | translate}}:</label>\n" +
    "                                        <form ng-submit=\"updateCartItemQty(item, item.quantity,{opencartAfterEdit: false})\">\n" +
    "                                            <input quantity-input type=\"number\" min=\"0\" step=\"1\" pattern=\"\\d*\" class=\"form-control\" id=\"qtyCart\" ng-model=\"item.quantity\"\n" +
    "                                            ng-blur=\"updateCartItemQty(item, item.quantity,{opencartAfterEdit: false})\" />\n" +
    "                                        </form>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <!-- total price -->\n" +
    "                                <div class=\"price-total item-attr\">{{'TOTAL_PRICE' | translate}}: <span>{{ item.itemPrice.amount || 0 | currency: currencySymbol}}</span></div>\n" +
    "\n" +
    "                                <!-- note display -->\n" +
    "                                <div id=\"noteMixin_area\" class=\"noteMixin\">\n" +
    "\n" +
    "                                    <!-- display the note -->\n" +
    "                                    <div class=\"note-display\">\n" +
    "                                        {{item.mixins.note.comment}}\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <!-- note edit button -->\n" +
    "                                    <a id=\"addEditNote\" ng-show=\"note.noteCollapsed\" ng-click=\"note.expandNote(item.mixins.note.comment)\" class=\"modify-note text-uppercase\" href=\"#\">{{item.mixins.note.comment ? (\"EDIT_NOTE\" | translate) : (\"ADD_NOTE\" | translate)}}</a>\n" +
    "\n" +
    "                                    <!-- note delete button -->\n" +
    "                                    <span ng-if=\"item.mixins.note.comment\" ng-show=\"note.noteCollapsed\">\n" +
    "                                        &nbsp; | &nbsp;\n" +
    "                                        <a href=\"#\"  ng-click=\"note.removeNote(item)\" title=\"Delete Note\" class=\"modify-note text-uppercase\">{{'DELETE_NOTE' | translate}}</a>\n" +
    "                                    </span>\n" +
    "\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "\n" +
    "                            <!-- delete button -->\n" +
    "                            <div class=\"col-xs-2 text-right\">\n" +
    "                                <button id=\"remove-product\" ng-click=\"removeProductFromCart(item.id)\" class=\"btn btn-link removeCartItem\"><span class=\"hyicon hyicon-remove\"></span></button>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "\n" +
    "                    <!-- Note Mixin -->\n" +
    "                    <div ng-show=\"!note.noteCollapsed\" class=\"cart-item-note\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <form ng-submit=\"note.submit(item)\">\n" +
    "\n" +
    "                                <label>{{'NOTE' | translate}}</label>\n" +
    "\n" +
    "                                <textarea id=\"cartItemNote\" ng-model=\"note.content\" class=\"form-control\" rows=\"3\"></textarea>\n" +
    "\n" +
    "                                <p class=\"error\" ng-show=\"note.saveFailed\">{{'UNABLE_TO_SAVE_NOTE' | translate}}</p>\n" +
    "\n" +
    "                                <button ng-if=\"!note.noteCollapsed\" type=\"button\" ng-click=\"note.collapseNote()\" class=\"btn btn-link btn-lg pull-left text-uppercase\" href=\"#\">{{'CANCEL' | translate}}</button>\n" +
    "\n" +
    "                                <button id=\"saveCartItemNote\" class=\"btn btn-primary btn-lg pull-right text-uppercase\" type=\"submit\">{{'SAVE' | translate}}</button>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"clearfix\"></div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "    <!-- /Cart Item -->\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/checkout/templates/checkout-cart.html',
    "<div class=\"CheckoutCartContainer\">\n" +
    "\n" +
    "    <h2>{{'ORDER_DETAILS' | translate}}\n" +
    "        <!--<span id=\"checkout-cart-btn\"  class=\"glyphicon glyphicon-pencil\"  ng-click=\"showEditCart()\"  ng-if=\"cart.items.length\"></span>-->\n" +
    "    </h2>\n" +
    "\n" +
    "    <!-- cart items -->\n" +
    "    <section class=\"cartItems\" ng-cloak>\n" +
    "\n" +
    "        <table class=\"table table-striped cart-items-table\">\n" +
    "\n" +
    "            <!-- desktop view -->\n" +
    "            <tbody class=\"hidden-sm hidden-xs\">\n" +
    "                <tr>\n" +
    "                    <th colspan=\"2\">\n" +
    "                        <div ng-cloak>\n" +
    "                            <span ng-if=\"cart.totalUnitsCount > 1\">{{'TOTAL' | translate}} ({{cart.totalUnitsCount}} {{'ITEMS' | translate}}) </span>\n" +
    "                            <span ng-if=\"cart.totalUnitsCount <= 1\">{{'TOTAL' | translate}} ({{cart.totalUnitsCount}} {{'ITEM' | translate}}) </span>\n" +
    "                            <span class=\"cart-totalPrice\">{{cart.totalPrice.amount | currency: currencySymbol}}</span>\n" +
    "                        </div>\n" +
    "                    </th>\n" +
    "                    <th class=\"text-right item-price-col\">{{'ITEM_PRICE' | translate}}:</th>\n" +
    "                    <th class=\"text-center qty-col\">{{'QTY' | translate}}:</th>\n" +
    "                    <th class=\"text-right total-col\">{{'TOTAL_PRICE' | translate}}: </th>\n" +
    "                    <th></th>\n" +
    "                </tr>\n" +
    "\n" +
    "                <tr ng-repeat=\"item in cart.items track by $index\">\n" +
    "                    <td class=\"img-col\">\n" +
    "                        <a ui-sref=\"base.product.detail( {productId: item.product.id} )\">\n" +
    "                            <img ng-src=\"{{ item && item.product.images[0].url || ''}}\" class=\"product-img\" />\n" +
    "                        </a>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                      <ul class=\"list-unstyled\">\n" +
    "                        <li>{{item.product.name}}</li>\n" +
    "                        <li ng-repeat=\"variant in item.variants track by $index\">{{variant}}</li>                        \n" +
    "                      </ul>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td class=\"text-right item-effectiveAmount\">{{item.price.effectiveAmount | currency: currencySymbol}}  <span class=\"priceUnit\" ng-if=\"item.price.measurementUnit\">{{item.price.measurementUnit.quantity}} {{item.price.measurementUnit.unit}}</span></td>\n" +
    "                    <td class=\"text-center item-quantity\">{{ item.quantity }}</td>\n" +
    "                    <td class=\"text-right\"><strong>{{ (item.itemPrice.amount) | currency: currencySymbol}}</strong></td>\n" +
    "                    <td></td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "\n" +
    "            <!-- mobile view -->\n" +
    "            <tbody class=\"visible-sm visible-xs checkout-item-mobile\">\n" +
    "                <tr ng-repeat=\"item in cart.items track by $index\">\n" +
    "                    <td class=\"img-col\">\n" +
    "                        <a ui-sref=\"base.product.detail( {productId: item.product.id} )\">\n" +
    "                            <img ng-src=\"{{ item && item.product.images[0].url || ''}}\" class=\"product-img img-responsive\" />\n" +
    "                        </a>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-left mobile-cart-item-details\">\n" +
    "                        {{item.product.name}} <br>\n" +
    "                        {{'ITEM_PRICE' | translate}}: {{item.price.effectiveAmount | currency: currencySymbol}} <span class=\"priceUnit\" ng-if=\"item.price.measurementUnit\">{{item.price.measurementUnit.quantity}} {{item.price.measurementUnit.unit}}</span> <br>\n" +
    "                        {{'QTY' | translate}}:{{ item.quantity }} <br>\n" +
    "                        <strong>{{'TOTAL_PRICE' | translate}}: {{ (item.itemPrice.amount) | currency: currencySymbol}}</strong>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "\n" +
    "        </table>\n" +
    "\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"summary\" ng-cloak>\n" +
    "        <!-- CHECKOUT-CART -->\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <table class=\"table\">\n" +
    "                <tbody>\n" +
    "                    <tr>\n" +
    "                        <td class=\"text-left\">{{'SUBTOTAL' | translate}}</td>\n" +
    "                        <td class=\"text-right\">{{cart.subTotalPrice.amount | currency: currencySymbol}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-if=\"cart.totalDiscount.amount > 0\">\n" +
    "                        <td class=\"text-left\">{{'DISCOUNT' | translate}}</td>\n" +
    "                        <td class=\"text-right\">\n" +
    "                            <span class=\"cart-totalDiscount error\">-{{cart.totalDiscount.amount | currency: currencySymbol}}</span>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td class=\"text-left\">{{'SHIPPING' | translate}}</td>\n" +
    "                        <td class=\"text-right\">{{ cart.shipping.fee.amount | currency: currencySymbol }}</td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-repeat=\"taxLine in cart.taxAggregate.lines\" ng-show=\"!!taxConfiguration && !taxConfiguration.included && !!cart.totalTax && taxType === 'FLATRATE'\">\n" +
    "                        <td ng-if=\"taxLine.name\" class=\"text-left\">{{taxLine.name}}</td>\n" +
    "                        <td ng-if=\"!taxLine.name\" class=\"text-left\">{{'TAX' | translate}}</td>\n" +
    "                        <td class=\"text-right\">\n" +
    "                            {{taxLine.amount | currency: currencySymbol}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr ng-show=\"calculateTax.taxCalculationApplied && taxType !== 'FLATRATE'\">\n" +
    "                        <td class=\"text-left\">{{'TAX' | translate}}</td>\n" +
    "                        <td class=\"text-right\">\n" +
    "                            {{cart.totalTax.amount | currency: currencySymbol}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "                <tfoot class=\"order-total-details\">\n" +
    "                    <tr>\n" +
    "                        <td class=\"text-left\">{{'ORDER_TOTAL' | translate}}</td>\n" +
    "                        <!-- <td class=\"text-right\">{{((cart.subTotalPrice.amount-coupon.amounts.discountAmount>0)?cart.subTotalPrice.amount-coupon.amounts.discountAmount : 0) + shippingCost | currency: currencySymbol}}</td> -->\n" +
    "                        <!-- <td class=\"text-right\">{{cart.totalPrice.amount | currency: currencySymbol}}</td> -->\n" +
    "                        <!-- <td class=\"text-right\" id=\"checkout-loyalty-newAmount\">\n" +
    "                        {{loyaltyAmounts.newAmount-coupon.amounts.discountAmount | currency: currencySymbol}}\n" +
    "                        </td> -->\n" +
    "                        <td class=\"text-right\">{{cart.totalPrice.amount | currency: currencySymbol}}</td>\n" +
    "                    <tr>\n" +
    "                </tfoot>\n" +
    "            </table>\n" +
    "            <div ng-include src=\"'js/app/loyalty/templates/checkout_cart.html'\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "    </section>\n" +
    "    <div ui-view=\"editCart\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/checkout/templates/checkout-edit-cart.html',
    "<!--\n" +
    "  ~ [y] hybris Platform\n" +
    "  ~\n" +
    "  ~ Copyright (c) 2000-2014 hybris AG\n" +
    "  ~ All rights reserved.\n" +
    "  ~\n" +
    "  ~ This software is the confidential and proprietary information of hybris\n" +
    "  ~ (\"Confidential Information\"). You shall not disclose such Confidential\n" +
    "  ~ Information and shall use it only in accordance with the terms of the\n" +
    "  ~ license agreement you entered into with hybris.\n" +
    "  -->\n" +
    "\n" +
    "<div class=\"edit-cart-backdrop\"></div>\n" +
    "\n" +
    "<div role=\"navigation\" id=\"cart\" class=\"edit-cart\" ng-cloak>\n" +
    "\n" +
    "		<div class=\"btn-group continue\" ng-hide=\"!!cart.items\">\n" +
    "			<button class=\"btn  btn-default continue \" data-ui-sref=\"base.category\">\n" +
    "                <span class=\"hyicon hyicon-chevron-thin-left\"></span>\n" +
    "                <span class=\"hidden-sm hidden-xs\">{{'CONTINUE_SHOPPING' | translate}}</span>\n" +
    "                <span class=\"hidden-md hidden-lg\">{{'SHOP' | translate}}</span>\n" +
    "            </button>\n" +
    "		</div>\n" +
    "		<div class=\"btn-group checkout\" ng-hide=\"!cart.items.length\">\n" +
    "			<button class=\"btn  btn-primary \" ng-click=\"hideEditCart()\" ng-if=\"cart.items.length\"><span class=\"hyicon hyicon-chevron-thin-left\"></span>\n" +
    "                {{'BACK_TO_CHECKOUT' | translate}}\n" +
    "			</button>\n" +
    "		</div>\n" +
    "\n" +
    "	<div  ng-hide=\"!!cart.items\">\n" +
    "		<p class=\"edit-cart-empty\">{{'NO_ITEMS_IN_CART' | translate}}</p>\n" +
    "	</div>\n" +
    "\n" +
    "	<section class=\"summary\" ng-hide=\"!cart.items.length\">\n" +
    "		<table class=\"table\">\n" +
    "			<thead>\n" +
    "			<tr>\n" +
    "				<th>{{'EST_ORDER_TOTAL' | translate}}</th>\n" +
    "				<th class=\"text-right\">{{cart.totalPrice.amount| currency: currencySymbol}}</th>\n" +
    "			<tr>\n" +
    "			</thead>\n" +
    "			<tbody>\n" +
    "				<tr>\n" +
    "		            <td >{{'SUBTOTAL' | translate}} ( {{cart.totalUnitsCount || 0}} {{'ITEM' | translate}}{{cart.totalUnitsCount == 1 ? '' :'s'}} )\n" +
    "		            </td>\n" +
    "		            <td class=\"text-right\">\n" +
    "		                {{cart.subTotalPrice.amount | currency: currencySymbol}}\n" +
    "		            </td>\n" +
    "                </tr>\n" +
    "                <tr ng-if=\"cart.totalDiscount.amount && cart.totalDiscount.amount != 0\">\n" +
    "                    <td>{{'DISCOUNT' | translate}}</td>\n" +
    "		            <td class=\"text-right\" style=\"color:red\">\n" +
    "		                -{{cart.totalDiscount.amount | currency: currencySymbol}}\n" +
    "		            </td>\n" +
    "                </tr>\n" +
    "            	<tr>\n" +
    "                    <td>{{'SHIPPING' | translate}}</td>\n" +
    "                    <td class=\"text-right\">\n" +
    "                        {{cart.shippingCost.amount | currency: currencySymbol}}\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat=\"taxLine in cart.taxAggregate.lines\" ng-show=\"!!taxConfiguration && !taxConfiguration.included && !!cart.totalTax && taxType === 'FLATRATE'\">\n" +
    "                    <td ng-if=\"taxLine.name\">{{taxLine.name}}</td>\n" +
    "                    <td ng-if=\"!taxLine.name\">{{'TAX' | translate}}</td>\n" +
    "                    <td class=\"text-right\">\n" +
    "                        {{taxLine.amount | currency: currencySymbol}}\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr ng-show=\"calculateTax.taxCalculationApplied && taxType !== 'FLATRATE'\">\n" +
    "                    <td>{{'TAX' | translate}}</td>\n" +
    "                    <td class=\"text-right\">\n" +
    "                        {{cart.totalTax.amount | currency: currencySymbol}}\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "			</tbody>\n" +
    "\n" +
    "		</table>\n" +
    "	</section>\n" +
    "	<section>\n" +
    "				<!-- Cart Item -->\n" +
    "	<div ng-repeat=\"item in cart.items\">\n" +
    "		<div ng-if=\"item.error\" class=\"error col-xs-12 col-md-12\" >\n" +
    "			<span class=\"error\">{{'CART_ITEM_UPDATE_ERROR' | translate}}</span>\n" +
    "		</div>\n" +
    "		<div class=\"cart-item row\">\n" +
    "			<div class=\"col-xs-4 col-md-4 text-center img-col\">\n" +
    "				<img ng-src=\"{{ item && item.product.images[0].url || ''}}\" class=\"img-responsive\"/>\n" +
    "                <button ng-click=\"removeProductFromCart(item.id)\" class=\"btn delete btn-link hidden-lg hidden-md\"><span class=\"hyicon hyicon-remove\"></span></button>\n" +
    "            </div>\n" +
    "			<div class=\"col-xs-8 col-md-8  detail-col\">\n" +
    "				<button id=\"remove-product\" ng-click=\"removeProductFromCart(item.id)\" class=\"btn delete btn-link pull-right hidden-xs  hidden-sm\"><span class=\"hyicon hyicon-remove\"></span></button>\n" +
    "				<div class=\"name\">{{item.product.name}}</div>\n" +
    "				<div class=\"price item-attr\">{{'ITEM_PRICE' | translate}}: <span> {{item.price.effectiveAmount | currency: currencySymbol}}</span> </div>\n" +
    "				<div class=\"clearfix\">\n" +
    "					<div class=\"input-group pull-left\" ng-class=\"{error: item.error}\">\n" +
    "						<span class=\"input-group-addon\">{{'QTY' | translate}}:</span>\n" +
    "                        <input type=\"number\" quantity-input ng-blur=\"(!item.quantity || item.quantity === 0) &amp;&amp; removeProductFromCart(item.id)\" ng-change=\"item.quantity &gt; 0 &amp;&amp; updateCartItemQty(item, item.quantity, {closeCartAfterTimeout: false, opencartAfterEdit: false })\" ng-model=\"item.quantity\" class=\"form-control\" pattern=\"\\d*\" step=\"1\" min=\"0\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"price-total item-attr\">{{'TOTAL_PRICE' | translate}}: <span>{{ item.itemPrice.amount || 0 | currency: currencySymbol}}</span></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<!-- /Cart Item -->\n" +
    "	</section>\n" +
    "</div>"
  );


  $templateCache.put('js/app/checkout/templates/checkout-form.html',
    "<h1>\n" +
    "<small class=\"visible-lg visible-md\">{{'SIMPLE_3_STEP_CHECKOUT' | translate}}</small>\n" +
    "<small class=\"visible-xs visible-sm\">{{'SIMPLE_4_STEP_CHECKOUT' | translate}}</small>\n" +
    "{{'SECURE_CHECKOUT' | translate}} \n" +
    "</h1>\n" +
    "<ng-form name=\"checkoutForm\" mobile-checkout-wizard novalidate autocomplete=\"on\">\n" +
    "<ng-form name=\"shipToForm\" novalidate autocomplete=\"on\" ng-cloak>\n" +
    "<div class=\"step step-1\" ng-class=\"{'done': wiz.step1Done}\">\n" +
    "    <h2> {{'STEP_1_MY_DETAILS' | translate}} <span ng-show=\"wiz.step1Done\" class=\"glyphicon glyphicon-pencil\"\n" +
    "    ng-click=\"editBillTo()\"></span></h2>\n" +
    "\n" +
    "    <div class=\"row step-detail\">\n" +
    "        <div class=\"col-lg-6 custom-select-container checkout-selector\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                 ng-class=\"{'has-error': billToForm.titleAccount.$invalid && ( billToForm.titleAccount.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"titleAccount\">{{'TITLE' | translate}}</label>\n" +
    "                <ui-select ng-model=\"order.account.title\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"title in titles | filter: $select.search\">\n" +
    "                        {{title}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "           </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-6 col\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.firstNameAccount.$invalid && (shipToForm.firstNameAccount.$dirty  || showPristineErrors)}\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"firstNameAccount\">{{'FIRST_NAME' | translate}}</label>\n" +
    "                <input ng-change=\"updateAddressName()\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" \n" +
    "                       type=\"text\" class=\"form-control ui-autocomplete\" id=\"firstNameAccount\" name=\"firstNameAccount\"\n" +
    "                ng-model=\"order.account.firstName\" required autocomplete=\"on\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-6 col\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                 ng-class=\"{'has-error': shipToForm.middleNameAccount.$invalid && (shipToForm.middleNameAccount.$dirty  || showPristineErrors)}\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"middleNameAccount\">{{'MIDDLE_NAME' | translate}}</label>\n" +
    "                <input ng-change=\"updateAddressName()\" type=\"text\" class=\"form-control ui-autocomplete\" id=\"middleNameAccount\" name=\"middleNameAccount\"\n" +
    "                       ng-model=\"order.account.middleName\" autocomplete=\"on\" placeholder=\"(Optional)\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-6\">\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{'has-error': shipToForm.lastNameAccount.$invalid && (shipToForm.lastNameAccount.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"lastNameAccount\">{{'LAST_NAME' | translate}}</label>\n" +
    "                <input ng-change=\"updateAddressName()\" type=\"text\" inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                        class=\"form-control\" id=\"lastNameAccount\" name=\"lastNameAccount\" ng-model=\"order.account.lastName\"\n" +
    "                required autocomplete=\"on\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <div class=\"error\" ng-show=\"!shipToForm.email.focused && shipToForm.email.$invalid && shipToForm.email.$dirty\" style=\"color:red\">\n" +
    "                <small class=\"help-inline has-error\">\n" +
    "                <span class=\"error\">{{'PLEASE_ENTER_VALID_EMAIL' | translate}}</span>\n" +
    "                </small>\n" +
    "            </div>\n" +
    "            <div class=\"form-group input-group\"\n" +
    "                ng-class=\"{ 'has-error': !shipToForm.email.focused && shipToForm.email.$invalid &&  ( shipToForm.email.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"email\">{{'EMAIL' | translate}}</label>\n" +
    "                <input type=\"email\" builder-input=\"email\"\n" +
    "                    class=\"form-control\" id=\"email\"\n" +
    "                       name=\"email\" ng-model=\"order.account.email\"\n" +
    "                       required autocomplete=\"on\"\n" +
    "                       ng-focus=\"shipToForm.email.focused=true\"\n" +
    "                       ng-blur=\"shipToForm.email.focused=false\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- section heading -->\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <span class=\"form-block-headline\">{{'SHIPPING_ADDRESS' | translate}}</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- select from address book -->\n" +
    "        <div class=\"col-lg-12\" ng-if=\"user.isAuthenticated && (addresses.length > 1)\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <button class=\"btn btn-default btn-lg btn-block\" id=\"select-address-btn-1\" ng-click=\"openAddressDialog(order.shipTo)\">{{'SELECT_FROM_ADDRESS_BOOK' | translate}}</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- clear the row -->\n" +
    "        <div class=\"clearfix\"></div>\n" +
    "        \n" +
    "        <localized-addresses type=\"shipping\"></localized-addresses>\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <button id=\"continue-to-billing\" class=\"btn btn-primary btn-lg btn-block visible-sm visible-xs\"\n" +
    "            ng-click=\"shipToDone(shipToForm.$valid, shipToForm.$name, shipToForm.country.$viewValue.id)\">{{'CONTINUE' | translate}} <span\n" +
    "            class=\"hyicon hyicon-chevron-thin-right\"></span></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</ng-form>\n" +
    "<ng-form name=\"billToForm\" novalidate autocomplete=\"on\" ng-cloak>\n" +
    "<div class=\"step step-2\" ng-class=\"{'disabled' : !wiz.step1Done, 'done': wiz.step2Done}\">\n" +
    "    <a id=\"step2\">\n" +
    "        <h2> {{'STEP_2_BILLING_INFORMATION' | translate}} <span ng-show=\"wiz.step2Done\" class=\"glyphicon glyphicon-pencil\" ng-click=\"editShipTo()\"></span></h2>\n" +
    "    </a>\n" +
    "    <div class=\"row step-detail\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <span class=\"form-block-headline\">{{'BILLING_ADDRESS' | translate}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-12\" ng-if=\"user.isAuthenticated && (addresses.length > 1)\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <button class=\"btn btn-default btn-lg btn-block\" id=\"select-address-btn-2\" ng-click=\"openAddressDialog(order.billTo, 'billing')\">{{'SELECT_FROM_ADDRESS_BOOK' | translate}}</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <div class=\"checkbox\">\n" +
    "                <label>\n" +
    "                    <input type=\"checkbox\" id=\"shipTo\" ng-model=\"shipToSameAsBillTo\" ng-change=\"toggleBillToSameAsShipTo()\">\n" +
    "                    <span class=\"option\">{{'SAME_AS_SHIPPING_ADDRESS' | translate}}</span>\n" +
    "                    <span id=\"order-shipTo-address1\" class=\"adress\" ng-show=\"shipToSameAsBillTo\">{{ order.shipTo.address1 }}</span>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <localized-addresses type=\"billing\"></localized-addresses>\n" +
    "\n" +
    "        <div class=\"col-lg-12 custom-select-container checkout-selector\" ng-show=\"shippingConfigured\">\n" +
    "            <div class=\"col-lg-12 col-md-12\">\n" +
    "                <span class=\"form-block-headline\">{{'DELIVERY_METHOD' | translate}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"shipMethod\">{{'METHOD' | translate}}</label>\r" +
    "\n" +
    "                <!-- loyalty call in on select function -->\n" +
    "                <ui-select ng-model=\"$parent.shippingCost\" on-select=\"closeCartOnCheckout(); updateShippingCost($parent.shippingCost)\" ng-disabled=\"!shippingCosts.length\">\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected.name}} - {{'COST' | translate}}: {{$select.selected.fee.amount | currency : currencySymbol}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"cost in (shippingCosts | filter: $select.search) track by cost.id\">\n" +
    "                        {{cost.name}} - {{'COST' | translate}}: {{cost.fee.amount | currency : currencySymbol}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    <div class=\"col-lg-12\">\n" +
    "        <button id=\"continue-to-payment-method\" class=\"btn btn-primary btn-lg btn-block visible-sm visible-xs\" ng-click=\"billToDone(billToForm.$valid, billToForm.$name)\">{{'CONTINUE' | translate}} <span\n" +
    "        class=\"hyicon hyicon-chevron-thin-right\"></span></button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</ng-form>\n" +
    "\n" +
    "<div id=\"preview-order\" class=\" hidden-xs hidden-sm\">\n" +
    "    <div class=\"error text-center\" ng-if=\"messagePreviewOrder\" >\n" +
    "        <small class=\"help-inline has-error\">\n" +
    "        <span class=\"error text-center\">{{messagePreviewOrder | translate}}</span>\n" +
    "        </small>\n" +
    "    </div>\n" +
    "    <button class=\"btn btn-primary btn-lg btn-block\"\n" +
    "            id=\"preview-order-btn\" ng-click=\"previewOrderDesktop(shipToForm.$valid, billToForm.$valid)\">{{'PREVIEW_ORDER' | translate}}\n" +
    "    </button>\n" +
    "    <div class=\"col-md-12 col-sm-12 checkout-cart\" ng-show=\"displayCart\" ui-view=\"checkoutcart\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<ng-form ng-class=\"{'hidden-lg hidden-md': !displayCart}\" name=\"paymentForm\" novalidate autocomplete=\"on\" ng-cloak>\n" +
    "<div class=\"step step-3\" ng-class=\"{'disabled' : !wiz.step2Done, 'done': wiz.step3Done}\">\n" +
    "<a id=\"step3\">\n" +
    "    <h2>{{'STEP_3_PAYMENT' | translate}} <span ng-show=\"wiz.step3Done\" class=\"glyphicon glyphicon-pencil\"\n" +
    "    ng-click=\"editPayment()\"></span></h2>\n" +
    "</a>\n" +
    "<div class=\"row step-detail\">\n" +
    "\n" +
    "    <!-- Apply Coupon -->\n" +
    "    <div class=\"couponWrap\">\n" +
    "        \n" +
    "        <div ng-include=\"'js/app/coupons/templates/coupon-apply.html'\" ng-controller=\"CouponCtrl\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "<!--    <div class=\"col-lg-12\">\n" +
    "        <span class=\"form-block-headline\">{{'PAYMENT' | translate}}</span>\n" +
    "    </div> -->\n" +
    "    \n" +
    "<div ng-include src=\"'js/app/loyalty/templates/checkout_redeem_discount.html'\"></div>\n" +
    "\n" +
    "    <div class=\"cc-details\" ng-if=\"!loyalty.isPaid.complete\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <img src=\"img/creditcard.png\" alt=\"creditcard\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <div class=\"error\" ng-show=\"!paymentForm.ccNumber.focused && (paymentForm.ccNumber.msg\n" +
    "                || (paymentForm.ccNumber.$invalid && paymentForm.ccNumber.$dirty))\" >\n" +
    "                <small class=\"help-inline has-error\">\n" +
    "                <span class=\"error\">{{paymentForm.ccNumber.msg ? paymentForm.ccNumber.msg : 'PLEASE_ENTER_VALID_CC' | translate}}</span>\n" +
    "                </small>\n" +
    "            </div>\n" +
    "            <div class=\"form-group input-group\" ng-class=\"{'has-error': !paymentForm.ccNumber.focused &&\n" +
    "                (paymentForm.ccNumber.$invalid && ( paymentForm.ccNumber.$dirty || showPristineErrors)) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"ccNumber\">{{'CREDIT_CARD_NUMBER' | translate}}</label><!-- validate-card-number-->\n" +
    "                <input type=\"text\" class=\"form-control\" name=\"ccNumber\" id=\"ccNumber\"\n" +
    "                       ng-model=\"order.creditCard.number\" inline-error-input validate-card-number ng-required=\"order.paymentMethod === 'creditCard'\"\n" +
    "                inline-error-input-required-message=\"{{'REQUIRED' | translate}}\"\n" +
    "                ng-focus=\"paymentForm.ccNumber.focused=true\"\n" +
    "                ng-blur=\"paymentForm.ccNumber.focused=false\"\n" +
    "                ng-change=\"paymentForm.ccNumber.msg && resetErrorMsg(paymentForm.ccNumber)\"\n" +
    "                >\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-12\" ng-if=\"paymentForm.expDateMsg\">\n" +
    "            <div class=\"error\" ng-show=\"paymentForm.expDateMsg\" >\n" +
    "                <small class=\"help-inline has-error\">\n" +
    "                <span class=\"error\">{{paymentForm.expDateMsg}}</span>\n" +
    "                </small>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-6 custom-select-container checkout-selector\">\n" +
    "            <div class=\"form-group input-group\" ng-class=\"{'has-error': paymentForm.expMonth.$invalid && ( paymentForm.expMonth.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"expMonth\">{{'MONTH' | translate}}</label>\n" +
    "                <ui-select ng-model=\"order.creditCard.expMonth\" on-select=\"paymentForm.expDateMsg && resetExpDateErrors()\" id=\"expMonth\" name=\"expMonth\" required>\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"month in wiz.months | filter: $select.search\">\n" +
    "                        {{month}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-6 custom-select-container checkout-selector\">\n" +
    "            <div class=\"form-group input-group\" ng-class=\"{'has-error': paymentForm.expYear.$invalid && ( paymentForm.expYear.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"expYear\">{{'YEAR' | translate}}</label>\n" +
    "                <ui-select ng-model=\"order.creditCard.expYear\" on-select=\"paymentForm.expDateMsg && resetExpDateErrors()\" id=\"expYear\" name=\"expYear\" required>\n" +
    "                    <ui-select-match>\n" +
    "                        {{$select.selected}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"year in wiz.years | filter: $select.search\">\n" +
    "                        {{year}}\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-9\">\n" +
    "            <div class=\"error\" ng-show=\"!paymentForm.cvc.focused && (paymentForm.cvc.msg\n" +
    "                || (paymentForm.cvc.$invalid && paymentForm.cvc.$dirty))\">\n" +
    "                <small class=\"help-inline has-error\">\n" +
    "                <span class=\"error\">{{paymentForm.cvc.msg ? paymentForm.cvc.msg : 'PLEASE_ENTER_VALID_CODE' | translate}}</span>\n" +
    "                </small>\n" +
    "            </div>\n" +
    "            <div class=\"form-group input-group\" ng-class=\"{'has-error': paymentForm.cvc.$invalid\n" +
    "                && !paymentForm.cvc.focused && (paymentForm.cvc.$dirty || showPristineErrors) }\">\n" +
    "                <label class=\"input-group-addon control-label\" for=\"cvc\">{{'CVC_NUMBER' | translate}}</label>\n" +
    "                <input type=\"text\" class=\"form-control\" name=\"cvc\" id=\"cvc\" ng-required=\"order.paymentMethod === 'creditCard'\"\n" +
    "                       inline-error-input inline-error-input-required-message=\"{{'REQUIRED' | translate}}\" ng-model=\"order.creditCard.cvc\" validate-cvc\n" +
    "                ng-focus=\"paymentForm.cvc.focused=true\" ng-blur=\"paymentForm.cvc.focused=false\"\n" +
    "                ng-change=\"paymentForm.cvc.msg && resetErrorMsg(paymentForm.cvc)\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-3\">\n" +
    "            <img src=\"img/cvv.png\" alt=\"\"/>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <button id=\"mobile-place-order-btn\" class=\"btn btn-primary btn-lg btn-block visible-sm visible-xs\" ng-click=\"paymentDone(paymentForm.$valid, paymentForm.$name)\" type=\"submit\">{{'CONTINUE' | translate}} <span\n" +
    "        class=\"hyicon hyicon-chevron-thin-right\"></span></button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</ng-form>\n" +
    "<div class=\"step step-4 confirm\" ng-class=\"{'disabled' : !wiz.step3Done, 'hidden-lg hidden-md': !displayCart}\" ng-cloak>\n" +
    "<a id=\"step4\">\n" +
    "    <h2 class=\"visible-sm visible-xs\">{{'STEP_4_REVIEW_ORDER' | translate}}</h2>\n" +
    "</a>\n" +
    "<div class=\"error\" ng-if=\"message\" >\n" +
    "    <small class=\"help-inline has-error\">\n" +
    "    <span class=\"error\">{{message | translate}}</span>\n" +
    "    </small>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row step-detail\" ng-class=\"{'has-error': message }\">\n" +
    "    <div class=\"hidden-lg hidden-md\" ui-view=\"checkoutcartmobile\"></div>\n" +
    "    <div class=\"col-xs-6 hidden-sm hidden-xs text-left\">\n" +
    "        <span class=\"description\">{{'TOTAL' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-6 text-right hidden-sm hidden-xs\">\n" +
    "        <span class=\"value\">{{cart.totalPrice.amount | currency: currencySymbol}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\" id=\"place-order-btn\"\n" +
    "        ng-click=\"placeOrder(checkoutForm.$valid, checkoutForm.$name)\" ng-disabled=\"submitIsDisabled\">{{'PLACE_ORDER' | translate}}\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</ng-form>"
  );


  $templateCache.put('js/app/checkout/templates/checkout-frame.html',
    "<div class=\"checkout\">\n" +
    "	<div class=\"row section\">\n" +
    "		<div class=\"col-md-12 col-lg-12 steps checkoutForm\" ui-view=\"checkoutform\"></div>\n" +
    "\n" +
    "        \n" +
    "		<!--<div class=\"col-md-5 col-sm-5 checkout-cart  hidden-md hidden-sm hidden-xs\" ui-view=\"checkoutcart\"></div>-->\n" +
    "\n" +
    "        <!--<div ng-show=\"checkoutCartEditVisible\" class=\"col-md-4 col-sm-4 checkout-cart-edit\" ui-view=\"checkoutcartedit\"></div>-->\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/checkout/templates/order-processing-splash-screen.html',
    "<div class=\"modal-body\" style=\"padding-bottom:100px;\">\n" +
    "    \n" +
    "    <p class=\"text-center\" style=\"text-transform:uppercase;\">{{'ORDER_PENDING' | translate}}</p>\n" +
    "\n" +
    "    <div class=\"spinner\"></div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/confirmation/templates/confirmation.html',
    "<div class=\"confirm\">\n" +
    "    \n" +
    "    <!-- order success -->\n" +
    "    <div class=\"row section success-box\" ng-if=\"accountSuccess\">\n" +
    "        {{'ACCOUNT_SUCCESS' | translate}}\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"row text-center header-block\">\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-sm-offset-3\">\n" +
    "            <h1>\n" +
    "                <span translate=\"THANK_YOU_FOR_YOUR_ORDER\" translate-compile></span>\n" +
    "            </h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- order details -->\n" +
    "    <div class=\"text-center order-details\" ng-if=\"entity === 'order'\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-6 col-sm-offset-3\">\n" +
    "\n" +
    "                <h2 ng-if=\"isAuthenticated\" class=\"orderNumber\">{{'ORDER' | translate}} # <a ui-sref=\"base.orderDetail({orderId: orderInfo.orderId})\">{{ orderInfo.orderId }}</a></h2>\n" +
    "                \n" +
    "                <h2 ng-if=\"!isAuthenticated\" class=\"orderNumber\">{{'ORDER' | translate}}# {{ orderInfo.orderId }}</h2>\n" +
    "\n" +
    "                <div id=\"confirmation-success-message\" translate=\"A_COPY_OF_YOUR_ORDER_DETAILS_HAS_BEEN_SENT_TO\" translate-compile translate-values=\"{emailAddress: '{{confirmationDetails.emailAddress}}'}\" class=\"orderEmailedTo\"></div>\n" +
    "\n" +
    "                <div>\n" +
    "                    <p>{{'THE_SHIPMENT_IS_SCHEDULED_TO_ARRIVE_AT_THE_FOLLOWING_LOCATION' | translate}}:</p>\n" +
    "                    <address id=\"shipment-destination\">\n" +
    "                        <span ng-cloak>{{confirmationDetails.shippingAddressName}}<br></span>\n" +
    "                        <span ng-if=\"confirmationDetails.shippingAddressCompanyName\" ng-cloak>{{confirmationDetails.shippingAddressCompanyName}}<br></span>\n" +
    "                        <span ng-cloak>{{confirmationDetails.shippingAddressStreetLine1}}</span>\n" +
    "                        <span ng-cloak ng-if=\"confirmationDetails.shippingAddressStreetLine2\">{{confirmationDetails.shippingAddressStreetLine2}}<br></span>\n" +
    "                        <span ng-cloak>{{confirmationDetails.shippingAddressCityStateZip}}</span>\n" +
    "                        <span ng-cloak>{{confirmationDetails.shippingAddressCountry}}<br></span>\n" +
    "                    </address>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- order messaging -->\n" +
    "    <div class=\"text-center order-details\" ng-if=\"entity === 'checkout'\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-6 col-sm-offset-3\">\n" +
    "                <span>{{'YOUR_CHECKOUT_HAS_BEEN_ACCEPTED_ORDER_NOT_CREATED' | translate}}</span>\n" +
    "                <br/>\n" +
    "                <span class=\"orderNumber\">{{ checkoutInfo.checkoutId }}</span>\n" +
    "                <br/>\n" +
    "                <span>{{'YOUR_ORDER_WILL_BE_CREATED' | translate}}</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <!-- create account panel -->\n" +
    "    <div create-account class=\"create-account text-center\" ng-if=\"!isAuthenticated\">\n" +
    "\n" +
    "        <h2 class=\"creatAccountHeader\">Create An Account</h2>\n" +
    "        \n" +
    "        <p class=\"createAccountTagLine\"><span ng-bind-html=\"'ONE_MORE_STEP' | translate\"/></p>\n" +
    "        \n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n" +
    "                <div id=\"signup\">\n" +
    "                    <form name=\"signupForm\" ng-submit=\"signup(user.signup.password, confirmationDetails.emailAddress, signupForm)\">\n" +
    "        \n" +
    "                        <!-- email address -->\n" +
    "                        <div class=\"form-group input-group\">\n" +
    "                        \n" +
    "                            <span class=\"input-group-addon\">\n" +
    "                                <label class=\"control-label\" for=\"emailInput\">{{'EMAIL' | translate}}</label>\n" +
    "                            </span>\n" +
    "                        \n" +
    "                            <input builder-input=\"email\" type=\"email\" class=\"form-control\" id=\"emailInput\" name=\"email\"\n" +
    "                                   ng-model=\"confirmationDetails.emailAddress\" required ng-focus=\"clearErrors()\">\n" +
    "                        \n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <!-- password -->\n" +
    "                        <div class=\"form-group input-group\">\n" +
    "                            \n" +
    "                            <span class=\"input-group-addon\">\n" +
    "                                <label class=\"control-label\" for=\"newPasswordInput\">{{'PASSWORD' | translate}}</label>\n" +
    "                            </span>\n" +
    "                            \n" +
    "                            <input builder-input=\"password\" type=\"password\" class=\"form-control\" id=\"newPasswordInput\" placeholder=\"{{'PASSWORD_MINCHAR'| translate}}\" name=\"password\"\n" +
    "                               ng-model=\"user.signup.password\" required ng-focus=\"clearErrors()\">\n" +
    "                        \n" +
    "                        </div>\n" +
    "                        <div ng-include src=\"'js/app/loyalty/templates/signup_for_loyalty_program.html'\"></div>\n" +
    "                        <!-- error message -->\n" +
    "                        <ul ng-if=\"errors && errors.signup.length\" class=\"text-danger list-unstyled\">\n" +
    "                            <li ng-repeat=\"error in errors.signup\">{{error.message | translate}}</li>\n" +
    "                        </ul>\n" +
    "        \n" +
    "                        <!-- create account button -->\n" +
    "                        <button type=\"submit\" id=\"create-acct-btn\" class=\"btn btn-primary btn-lg btn-block\">{{'CREATE_ACCOUNT' | translate}}</button>\n" +
    "                            \n" +
    "                    </form>\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                    \n" +
    "                        <!-- social login -->\n" +
    "                        <div ng-if=\"fbAppId || googleClientId\" class=\"socialMediaSigninContainer centered-content\">\n" +
    "                    \n" +
    "                            <!-- fb login -->\n" +
    "                            <div class=\"col-md-6 col-sm-6\">\n" +
    "                                <div ng-if=\"fbAppId\" class=\"fbLogin\" ng-click=\"fbLogin()\">\n" +
    "                                    <div class=\"fbLoginButton\">\n" +
    "                                        <div class=\"fbsignInLabel\">{{'SIGN_IN_WITH_FACEBOOK' | translate}}</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        \n" +
    "                            <br class=\"visible-xs\">\n" +
    "        \n" +
    "                            <!-- g+ login -->\n" +
    "                            <div class=\"col-md-6 col-sm-6\">\n" +
    "                                <div ng-if=\"googleClientId\"  class=\"googlePlusLogin \">\n" +
    "                                    <div class=\"googleSignIn\" ng-click=\"googleLogin()\">\n" +
    "                                        <div class=\"googleSignInLabel\">{{'LOG_IN_WITH_GOOGLE' | translate}}</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                    \n" +
    "                        </div> \n" +
    "                        \n" +
    "                    </div>\n" +
    "        \n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"order-items\" ng-if=\"entity === 'order'\">\n" +
    "\n" +
    "        <!-- only 1 product in the order -->\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div class=\"item-list col-md-12\">\n" +
    "                <table class=\"table table-responsive\">\n" +
    "                    <tr class=\"hidden-sm hidden-xs\">\n" +
    "                        <th></th>\n" +
    "                        <th></th>\n" +
    "                        <th></th>\n" +
    "                        <th></th>\n" +
    "                        <th class=\"text-right\">{{'ITEM_PRICE' | translate}}</th>\n" +
    "                        <th class=\"text-center\">{{'QTY' | translate}}</th>\n" +
    "                        <th class=\"text-right\">{{'TOTAL_PRICE' | translate}}</th>\n" +
    "                        <th></th>\n" +
    "                    </tr>\n" +
    "\n" +
    "                    <!-- desktop tablet view -->\n" +
    "                    <tr ng-repeat=\"entry in confirmationDetails.entries\" class=\"hidden-sm hidden-xs\">\n" +
    "                        <td class=\"margin-cell\"></td>\n" +
    "                        <td><a ui-sref=\"base.product.detail( {productId: entry.product.id} )\">\n" +
    "                            <img ng-src=\"{{ entry.product.images && entry.product.images[0].url || ''}}\" class=\"\" width=\"90\" />\n" +
    "                        </a></td>\n" +
    "                        <td>{{entry.product.name}}</td>\n" +
    "                        <td>{{entry.product.sku}}</td>\n" +
    "                        <td class=\"text-right\">\n" +
    "                            <span>{{entry.unitPrice | currency: currencySymbol}}</span>\n" +
    "                            <span class=\"priceUnit\" ng-if=\"entry.measurementUnit\">{{entry.measurementUnit.value}} {{entry.measurementUnit.unit}}</span>\n" +
    "                        </td>\n" +
    "                        <td class=\"text-center\">{{entry.amount}}</td>\n" +
    "                        <td class=\"text-right\"><strong>{{entry.totalPrice |currency: currencySymbol}}</strong></td>\n" +
    "                        <td class=\"margin-cell\"></td>\n" +
    "                    </tr>\n" +
    "\n" +
    "                    <tr class=\"summary-row hidden-sm hidden-xs\">\n" +
    "                        <td colspan=\"5\"></td>\n" +
    "                        <td colspan=\"2\">\n" +
    "                            <table class=\"table\">\n" +
    "                                <tbody>\n" +
    "                                <tr>\n" +
    "                                    <td class=\"text-left\">{{'SUBTOTAL' | translate}}</td>\n" +
    "                                                        \n" +
    "                                    <td class=\"text-right\">{{ confirmationDetails.subTotalPrice | currency: currencySymbol}}</td>\n" +
    "                                </tr>\n" +
    "                                <tr>\n" +
    "                                    <td class=\"text-left\">{{'SHIPPING' | translate}}</td>\n" +
    "                                    <td class=\"text-right\">{{ confirmationDetails.shipping.total.amount | currency: currencySymbol }}</td>\n" +
    "                                </tr>\n" +
    "                                <tr ng-if=\"confirmationDetails.discountAmount != 0\">\n" +
    "                                    <td class=\"text-left\">{{'DISCOUNT' | translate}}</td>\n" +
    "                                    <td class=\"text-right\">\n" +
    "                                        <span id=\"discount-amount\" class=\"error\">-{{confirmationDetails.discountAmount | currency: currencySymbol}}</span>\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                                <tr ng-repeat=\"taxLine in confirmationDetails.tax.lines\" ng-show=\"confirmationDetails.tax.lines.length && !confirmationDetails.tax.total.inclusive\">\n" +
    "                                    <td ng-if=\"taxLine.name\">{{taxLine.name}}</td>\n" +
    "                                    <td ng-if=\"!taxLine.name\" class=\"text-left\">{{'TAX' | translate}}</td>\n" +
    "                                    <td class=\"text-right\">\n" +
    "                                        {{taxLine.amount | currency: currencySymbol}}\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                                </tbody>\n" +
    "                                <tfoot>\n" +
    "                                <tr class=\"order-total\">\n" +
    "                                    <td class=\"text-left\">{{'ORDER_TOTAL' | translate}}</td>\n" +
    "                                    <td id=\"confirmation-totalPrice\" class=\"text-right\">{{ confirmationDetails.totalPrice | currency: currencySymbol}}</td>\n" +
    "                                <tr>\n" +
    "                                                        \n" +
    "                                </tfoot>\n" +
    "                            </table>\n" +
    "                        </td>\n" +
    "                        <td class=\"margin-cell\"></td>\n" +
    "                    </tr>\n" +
    "\n" +
    "                    <!-- mobile view -->\n" +
    "                    <tr ng-repeat=\"entry in confirmationDetails.entries\" class=\"visible-sm visible-xs\">\n" +
    "                        <td class=\"text-right\">\n" +
    "                            <a ui-sref=\"base.product.detail( {productId: entry.product.id} )\">\n" +
    "                            <img ng-src=\"{{ entry.product.images && entry.product.images[0].url || ''}}\" class=\"\" width=\"90\" />\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "                        <td colspan=\"7\" class=\"text-left product-details-mobile\">\n" +
    "                            <div>{{entry.product.name}}</div>\n" +
    "                            <div>{{'SKU' | translate}}: {{entry.product.sku}}</div>\n" +
    "                            <div>\n" +
    "                                <span>{{'ITEM_PRICE' | translate}}: {{entry.unitPrice | currency: currencySymbol}}</span>\n" +
    "                                <span class=\"priceUnit\" ng-if=\"entry.measurementUnit\">{{entry.measurementUnit.value}} {{entry.measurementUnit.unit}}</span>\n" +
    "                            </div>\n" +
    "                            <div>{{'QTY' | translate}}: {{entry.amount}}</div>\n" +
    "                            <div><strong>{{'TOTAL_PRICE' | translate}}: {{entry.totalPrice |currency: currencySymbol}}</strong></div>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr class=\"summary-row visible-sm visible-xs\">\n" +
    "                        <td colspan=\"8\">\n" +
    "                            <table class=\"table\">\n" +
    "                                <tbody>\n" +
    "                                <tr>\n" +
    "                                    <td class=\"text-left\">{{'SUBTOTAL' | translate}}</td>\n" +
    "                                                        \n" +
    "                                    <td class=\"text-right\">{{ confirmationDetails.totalPrice - confirmationDetails.shipping.total.amount + confirmationDetails.discountAmount - confirmationDetails.tax.total.amount | currency: currencySymbol}}</td>\n" +
    "                                </tr>\n" +
    "                                <tr>\n" +
    "                                    <td class=\"text-left\">{{'SHIPPING' | translate}}</td>\n" +
    "                                    <td class=\"text-right\">{{ confirmationDetails.shipping.total.amount | currency: currencySymbol }}</td>\n" +
    "                                </tr>\n" +
    "                                <tr ng-if=\"confirmationDetails.discountAmount != 0\">\n" +
    "                                    <td class=\"text-left\">{{'DISCOUNT' | translate}}</td>\n" +
    "                                    <td class=\"text-right\">\n" +
    "                                        <span class=\"error\">-{{confirmationDetails.discountAmount | currency: currencySymbol}}</span>\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                                <tr ng-repeat=\"taxLine in confirmationDetails.tax.lines\" ng-show=\"confirmationDetails.tax.lines.length && !confirmationDetails.tax.total.inclusive\">\n" +
    "                                    <td ng-if=\"taxLine.name\">{{taxLine.name}}</td>\n" +
    "                                    <td ng-if=\"!taxLine.name\" class=\"text-left\">{{'TAX' | translate}}</td>\n" +
    "                                    <td class=\"text-right\">\n" +
    "                                        {{taxLine.amount | currency: currencySymbol}}\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                                </tbody>\n" +
    "                                <tfoot>\n" +
    "                                <tr class=\"order-total\">\n" +
    "                                    <td class=\"text-left\">{{'ORDER_TOTAL' | translate}}</td>\n" +
    "                                    <td class=\"text-right\">{{ confirmationDetails.totalPrice | currency: currencySymbol}}</td>\n" +
    "                                <tr>\n" +
    "                                                        \n" +
    "                                </tfoot>\n" +
    "                            </table>\n" +
    "\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "\n" +
    "                </table>\n" +
    "                <div ng-include src=\"'js/app/loyalty/templates/confirmation.html'\"></div>\n" +
    "                <div ng-include src=\"'js/app/loyalty/templates/checkout_signup_loyalty.html'\">\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <!-- mobile view -->\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "    <!-- order details -->\n" +
    "    <div class=\"order-success\"  ng-cloak>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-6 col-sm-offset-3\">\n" +
    "                <h3>{{'ENJOY_YOUR_ITEMS' | translate}}</h3>\n" +
    "\n" +
    "                <div data-ui-sref=\"base.category\">\n" +
    "                    <button class=\"btn btn-primary btn-lg\">\n" +
    "                        {{'RETURN_TO_SHOPPING' | translate}}\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "                <div translate=\"QUESTIONS\" translate-compile translate-values=\"{contactInfo: '{{questionsContactInfo}}'}\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/app/coupons/templates/coupon-apply.html',
    "<div class=\"couponApplyContainer\">\n" +
    "\n" +
    "	<!-- coupon wrapper -->\n" +
    "	<div class=\"couponContainer\">\n" +
    "\n" +
    "		<!-- apply coupon bar -->\n" +
    "		<div class=\"coupon-bar\">\n" +
    "\n" +
    "			<!-- minimum amount not met error message -->\n" +
    "			<div ng-if=\"coupon.restrictions.minOrderValue.amount > cart.totalPrice.amount\" class=\"error\">\n" +
    "				{{'COUPON_MINIMUM_NOT_MET' | translate}}\n" +
    "			</div>\n" +
    "	\n" +
    "			<!-- coupon error message -->\n" +
    "			<div id=\"coupon-error-message\" ng-if=\"couponErrorMessage\" class=\"error\">\n" +
    "				{{couponErrorMessage}}\n" +
    "			</div>\n" +
    "\n" +
    "			<form name=\"applyCouponForm\" class=\"input-group\" ng-class=\"{ 'has-error': couponErrorMessage }\">\n" +
    "				\n" +
    "				<!-- coupon input -->\n" +
    "				<input id=\"coupon-code\" builder-input=\"couponCode\" type=\"text\" name=\"couponCodeElement\" class=\"form-control couponInput\" \n" +
    "                       ng-model=\"couponCode\" ng-minlength=\"3\" ng-maxlength=\"24\" \n" +
    "                       placeholder=\"{{'ADD_COUPON_CODE'|translate}}\" />\n" +
    "\n" +
    "				<!-- coupon apply btn -->\n" +
    "				<span class=\"input-group-btn\">\n" +
    "					<button id=\"apply-coupon\" class=\"btn btn-default\" \n" +
    "                            ng-click=\"applyCoupon(couponCode, applyCouponForm.couponCodeElement.$invalid)\">\n" +
    "						{{'COUPON_APPLY' | translate}}\n" +
    "					</button>\n" +
    "				</span>\n" +
    "\n" +
    "			</form>\n" +
    "			\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- show applied  coupons -->\n" +
    "	<div ng-if=\"cart.discounts.length\">\n" +
    "		<table class=\"table table-striped coupon-list-table\">\n" +
    "			<tbody>\n" +
    "			<tr ng-repeat=\"discount in cart.discounts\" class=\"techne-table-xs-right techne-table-xs-left\">\n" +
    "				<td class=\"dicsount-code\">\n" +
    "					{{discount.code}}\n" +
    "				</td>\n" +
    "				<td>\n" +
    "					<!-- coupon applied -->\n" +
    "					<span ng-if=\"!discount.discountValidationDetails\">{{'COUPON_APPLIED' | translate}}</span>\n" +
    "					\n" +
    "					<!-- coupon not applied -->\n" +
    "					<span ng-if=\"discount.discountValidationDetails\" class=\"error\">{{'COUPON_NOT_APPLIED' | translate}} <br><small>{{discount.discountValidationDetails.details[0]}} </small></span>\n" +
    "\n" +
    "				</td>\n" +
    "				<td class=\"remove-coupon\">\n" +
    "					<button id=\"remove-coupon\" ng-click=\"removeCoupon(discount.id)\" class=\"btn delete btn-link\" title=\"Remove Coupon\"><span class=\"hyicon hyicon-remove\"></span></button>\n" +
    "				</td>\n" +
    "			</tr>\n" +
    "\n" +
    "			<tbody>\n" +
    "		</table>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/errors/templates/error-display.html',
    "<section class=\"errorPageContainer white\" match-background ng-cloak>\n" +
    "  <h2 class=\"errorTitle\">{{errorTitle}}</h2>\n" +
    "  <p>\n" +
    "      {{errorMessage}}\n" +
    "      <br/>\n" +
    "      {{errorRedirect}}\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"actionButton clearfix\">\n" +
    "    <button class=\"btn btn-secondary btn-g\" ng-click=\"redirect()\">\n" +
    "      {{errorButtonText}}\n" +
    "    </button>\n" +
    "  </div>\n" +
    "\n" +
    "</section>\n"
  );


  $templateCache.put('js/app/home/templates/home.html',
    "<div class=\"homepageContainer\" match-background>\n" +
    "    <div class=\"homepageCarouselContainer\">\n" +
    "        <!-- Top Images Carousel - Large -->\n" +
    "        <carousel interval=\"carouselInterval\" class=\"visible-lg\">\n" +
    "            <slide ng-repeat=\"slide in slidesLarge\" active=\"slide.active\">\n" +
    "                <site-content-image image=\"slide.image\" image-id=\"{{slide.id}}\"></site-content-image>\n" +
    "            </slide>\n" +
    "        </carousel>\n" +
    "\n" +
    "        <!-- Top Images Carousel - Small -->\n" +
    "        <carousel interval=\"carouselInterval\" class=\"hidden-lg\">\n" +
    "            <slide ng-repeat=\"slide in slidesSmall\" active=\"slide.active\">\n" +
    "                <site-content-image image=\"slide.image\" image-id=\"{{slide.id}}\"></site-content-image>\n" +
    "            </slide>\n" +
    "        </carousel>\n" +
    "        <div class=\"carouselImages\">\n" +
    "            <div class=\"content-container clearfix\">\n" +
    "\n" +
    "                <!-- Banner 1 -->\n" +
    "                <div class=\"hidden-xs col-sm-6 col-md-6 col-lg-6\">\n" +
    "                    <site-content-image image=\"banner1.large\" image-id=\"banner1\"></site-content-image>\n" +
    "                </div>\n" +
    "                <div class=\"hidden-xs col-sm-6 col-md-6 col-lg-6\">\n" +
    "                    <site-content-image image=\"banner2.large\" image-id=\"banner2\"></site-content-image>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- Banner 2 -->\n" +
    "                <div class=\"col-xs-12 hidden-sm hidden-md hidden-lg\">\n" +
    "                    <site-content-image image=\"banner1.small\" image-id=\"banner1\"></site-content-image>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 hidden-sm hidden-md hidden-lg\">\n" +
    "                    <site-content-image image=\"banner2.small\" image-id=\"banner2\"></site-content-image>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/home/templates/site-content-image.html',
    "\n" +
    "<div ng-if=\"image.hyperlinkUrl !== ''\">\n" +
    "    <a ng-if=\"image.internal\" href=\"{{image.hyperlinkUrl}}\">\n" +
    "        <img ng-src=\"{{image.imageUrl}}\" id=\"{{id}}\" class=\"banner\" />\n" +
    "    </a>\n" +
    "    <a ng-if=\"!image.internal\" href=\"{{image.hyperlinkUrl}}\" target=\"_blank\">\n" +
    "        <img ng-src=\"{{image.imageUrl}}\" id=\"{{id}}\" class=\"banner\" />\n" +
    "    </a>\n" +
    "</div>\n" +
    "<img ng-if=\"image.hyperlinkUrl === ''\" ng-src=\"{{image.imageUrl}}\" id=\"{{id}}\" class=\"banner\" />\n"
  );


  $templateCache.put('js/app/loyalty/templates/cart_details.html',
    "\n" +
    "	\n" +
    "<div ng-controller=\"LoyaltyCartCtrl\" ng-if=\"isConfigMaintained\">\n" +
    "	<div class=\"\" ng-show=\"thisUser.isMember && loyaltyConfig.showReward\">\n" +
    "		<div class=\"form-group\">\n" +
    "			<div ng-show=\"dummyFireProcessing\">\n" +
    "				<h4 class=\"text-center\" id=\"cart-processing-text\">{{ 'PROCESSING_TEXT' | translate}}</h4>\n" +
    "			</div>\n" +
    "			<div ng-hide=\"dummyFireProcessing\">\n" +
    "				<section class=\"summary\">\n" +
    "					<table class=\"table\">\n" +
    "						<thead>\n" +
    "							<tr>\n" +
    "								<th class=\"\" ng-if=\"!loyaltyConfig.showCashBal\">\n" +
    "									<h4 class=\"text-left text-green\" >\n" +
    "										<i id=\"cart-points-text\">{{ 'REWARD_PNTS_EARNED_TEXT' | translate}}</i>\n" +
    "									</h4>\n" +
    "								</th>\n" +
    "\n" +
    "								<th class=\"text-right\" ng-if=\"!loyaltyConfig.showCashBal\">\n" +
    "									<h4 class=\"text-right text-green\" >\n" +
    "										<i id=\"cart-loyalty-points\">{{earning.points}}</i>\n" +
    "									</h4>\n" +
    "								</th>\n" +
    "\n" +
    "								<th class=\"\" ng-if=\"loyaltyConfig.showCashBal\" >\n" +
    "									<h4 class=\"text-left text-green\" >\n" +
    "										<i id=\"cart-cash-text\">{{ 'REWARD_CASH_EARNED_TEXT' | translate}}</i>\n" +
    "									</h4>\n" +
    "								</th>\n" +
    "								\n" +
    "								<th class=\"text-right\" ng-if=\"loyaltyConfig.showCashBal\" >\n" +
    "									<h4 class=\"text-right text-green\">\n" +
    "										<i  id=\"cart-loyalty-cash\"> {{earning.cash | currency: currencySymbol}} </i>\n" +
    "									</h4>\n" +
    "								</th>\n" +
    "							</tr>\n" +
    "						</thead>\n" +
    "					</table>\n" +
    "				</section>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/loyalty/templates/checkout_cart.html',
    "\n" +
    "    \n" +
    "<div ng-controller=\"LoyaltyCheckoutCartCtrl\" ng-if=\"isConfigMaintained\">\n" +
    "    <div class=\"\" ng-show=\"thisUser.isMember && loyaltyConfig.showReward\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div ng-show=\"dummyFireProcessing\">\n" +
    "                <h4 class=\"text-center\" id=\"checkout-processing-text\">{{ 'PROCESSING_TEXT' | translate}}</h4>\n" +
    "            </div>\n" +
    "            <div ng-hide=\"dummyFireProcessing\">\n" +
    "                <section class=\"summary padding0\">\n" +
    "                    <table class=\"table\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th class=\"\" ng-if=\"!loyaltyConfig.showCashBal\">\n" +
    "                                    <h4 class=\"text-left text-green\">\n" +
    "                                        <i id=\"checkout-points-text\">{{ 'REWARD_PNTS_EARNED_TEXT' | translate}}</i>\n" +
    "                                    </h4>\n" +
    "                                </th>\n" +
    "\n" +
    "                                <th class=\"text-right\" ng-if=\"!loyaltyConfig.showCashBal\">\n" +
    "                                    <h4 class=\"text-right text-green\">\n" +
    "                                        <i id=\"checkout-loyalty-points\">{{earning.points}}</i>\n" +
    "                                    </h4>\n" +
    "                                </th>\n" +
    "\n" +
    "                                <th class=\"\" ng-if=\"loyaltyConfig.showCashBal\">\n" +
    "                                    <h4 class=\"text-left text-green\">\n" +
    "                                        <i id=\"checkout-cash-text\">{{ 'REWARD_CASH_EARNED_TEXT' | translate}}</i>\n" +
    "                                    </h4>\n" +
    "                                </th>\n" +
    "\n" +
    "                                <th class=\"text-right\" ng-if=\"loyaltyConfig.showCashBal\">\n" +
    "                                    <h4 class=\"text-right text-green\">\n" +
    "                                        <i id=\"checkout-loyalty-cash\"> {{earning.cash | currency: currencySymbol}} </i>\n" +
    "                                    </h4>\n" +
    "                                </th>\n" +
    "\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                    </table>\n" +
    "                </section>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/loyalty/templates/checkout_redeem_discount.html',
    "    \n" +
    "\n" +
    "    <div ng-controller=\"LoyaltyCheckoutCtrl\"  ng-if=\"isConfigMaintained\">\n" +
    "        <div class=\"col-lg-12\" ng-if=\"thisUser.isMember && loyaltyConfig.showReward && (userMaxPoints>0)\">\n" +
    "            <span class=\"form-block-headline\" id=\"checkout-spend-text\">{{'SPEND_YOUR_REWARDS_PNTS' | translate}}</span>\n" +
    "        </div>\n" +
    "        <div class=\"wrapperRewards\"  ng-if=\"thisUser.isMember && loyaltyConfig.showReward && (userMaxPoints>0)\">\n" +
    "            <div class=\"points-pay\">\n" +
    "                <div class=\"col-lg-12\">\n" +
    "                    <div class=\"panel\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            <div class=\"col-lg-3\" ng-if=\"!loyaltyConfig.showCashBal\">\n" +
    "                                <div class=\"form-group\" ng-class=\"{'has-error': (paymentForm.pointsGoing.$invalid) }\">\n" +
    "                                    <input type=\"number\" id=\"checkout-points-input\" class=\"form-control\" placeholder=\"Points\" min=\"0\" ng-pattern=\"/^\\d{0,9}(\\.\\d{1,9})?$/\" max=\"{{userMaxPoints}}\" ng-change=\"changePointsGoing()\" ng-model=\"redeem.pointsGoing\" ng-disabled=\"isSliderDisabled\" name=\"pointsGoing\" />\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-lg-9\" ng-if=\"!loyaltyConfig.showCashBal\">\n" +
    "                                <p class=\"points-going-label \">\n" +
    "                                <span id=\"checkout-currency-id\" ng-bind=\"currencyId\"></span>\n" +
    "                                <span id=\"points-going\" ng-bind=\"redeem.pointsToCurr\"></span>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\" ng-class=\"{'has-error': (paymentForm.cashGoing.$invalid) }\">\n" +
    "                                <div class=\"col-lg-3\" ng-if=\"loyaltyConfig.showCashBal\">\n" +
    "                                    <input type=\"number\" id=\"checkout-cash-input\" class=\"form-control\" placeholder=\"Cash\" min=\"0\" ng-pattern=\"/^\\d{0,9}(\\.\\d{1,9})?$/\" max=\"{{userMaxCash}}\" ng-change=\"changeCashGoing()\" ng-disabled=\"isSliderDisabled\" ng-model=\"redeem.cashGoing\" name=\"cashGoing\"/>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-lg-12\">\n" +
    "                                <div class=\"points-slider-wrapper col-lg-10\">\n" +
    "                                    <div class=\"clearfix\">\n" +
    "                                        <div class=\"pull-left\">\n" +
    "                                            <p class=\"minimum-Points\"> <span id=\"minimum-points\">{{0}}</span></p>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"pull-right\">\n" +
    "                                            <p class=\"maximum-Points\">\n" +
    "                                            <span id=\"maximum-points\" ng-if =\"!loyaltyConfig.showCashBal\" ng-bind=\"userMaxPoints\"></span>\n" +
    "                                            <span id=\"maximum-points\" ng-if =\"loyaltyConfig.showCashBal\" ng-bind=\"((userMaxPoints * redeem.ratio).toFixed(2))\">\n" +
    "                                            </span>\n" +
    "                                            </p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"clearfix\">\n" +
    "                                        <div\n" +
    "                                            id=\"points-slider\"\n" +
    "                                            min=\"0\"\n" +
    "                                            ui-slider\n" +
    "                                            ng-disabled=\"isSliderDisabled\"\n" +
    "                                            ng-if=\"!loyaltyConfig.showCashBal\"\n" +
    "                                            ng-change=\"changePointsGoing()\"\n" +
    "                                            ng-model=\"redeem.pointsGoing\"\n" +
    "                                            max=\"{{userMaxPoints}}\">\n" +
    "                                        </div>\n" +
    "                                        <div\n" +
    "                                            id=\"points-slider\"\n" +
    "                                            min=\"0\"\n" +
    "                                            ui-slider\n" +
    "                                            ng-disabled=\"isSliderDisabled\"\n" +
    "                                            ng-if=\"loyaltyConfig.showCashBal\"\n" +
    "                                            ng-change=\"changeCashGoing()\"\n" +
    "                                            ng-model=\"redeem.cashGoing\"\n" +
    "                                            max=\"{{userMaxCash}}\">\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-lg-2\">\n" +
    "                                    <button id=\"apply-points-button\" ng-if=\"showApplyPoints\" ng-click=\"applyLoyaltyPoints()\" class=\" btn btn-success points-slider-wrapper\" ng-disabled=\"isSliderDisabled\"> {{'APPLY' | translate}}  </button>\n" +
    "                                    <button id=\"remove-points-button\" ng-if=\"!showApplyPoints\" ng-click=\"removeLoyaltyPoints()\" class=\" btn btn-danger points-slider-wrapper\"> {{'REMOVE' | translate}}  </button>\n" +
    "\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>"
  );


  $templateCache.put('js/app/loyalty/templates/checkout_signup_loyalty.html',
    " <div ng-controller=\"SignupCheckoutCtrl\"  ng-if=\"isConfigMaintained\">\n" +
    "    <div class=\"wrapperRewards\" ng-hide=\"thisUser.isMember || !thisUser.isUser\">\n" +
    "        <!-- <div class=\"checkbox loyalty\" ng-show=\"loyaltyConfig.showReward\">\n" +
    "			<input type=\"checkbox\" ng-model=\"wantLoyaltyProgram\" id=\"want-loyalty-program\" />\n" +
    "			<label id=\"checkout-signup-label\" for=\"want-loyalty-program\" translate=\"{{ 'SIGN_UP_DESCRIPTION' }}\" translate-values=\"{ name: loyaltyProgram.name}\"></label>\n" +
    "		</div>  -->\n" +
    "		<div class=\"form-group\">\n" +
    "			<button class=\"btn btn-primary\" id=\"get-membership-button\" ng-click=\"getLoyaltyProgramMembership()\" ng-disabled=\"disableSave\" translate=\"{{ 'SIGN_UP_TITLE_PROGRAM_NAME' }}\" translate-values=\"{ programName: userProgramName}\"></button>\n" +
    "		</div>	\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/loyalty/templates/confirmation.html',
    "\n" +
    "        <div class=\"amountSection\" ng-controller=\"LoyaltyConfirmationCtrl\"  ng-if=\"isConfigMaintained\">\n" +
    "\n" +
    "            <div ng-if=\"thisUser.isMember && loyaltyConfig.showReward\">\n" +
    "\n" +
    "                <table class=\"table\" style=\"background: rgba(0, 0, 0, 0)\">\n" +
    "                        \n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                <span id=\"confirmation-points-text\"> {{ 'CONFIRMATION_LOYALTY_TEXT' | translate}} </span> \n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "\n" +
    "                </table>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                <!-- <table class=\"table\" style=\"background: rgba(0, 0, 0, 0)\">\n" +
    "                        \n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                <span id=\"confirmation-cash-redeemed-text\"> {{ 'REWARD_CASH_SPENT_TEXT' | translate}} </span> \n" +
    "                            </td>\n" +
    "                            <td class=\"text-right\">\n" +
    "                                <span class=\"error\" id=\"confirmation-cash-redeemed\" >- {{amounts.redeemed | currency: currencySymbol}} </span>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "\n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                <span id=\"confirmation-cash-earned-text\"> {{ 'LOYALTY_CASH_EARNED_TEXT' | translate}} </span> \n" +
    "                            </td>\n" +
    "                            <td class=\"text-right\">\n" +
    "                                <span class=\"text-green\" id=\"confirmation-cash-earned\" >{{amounts.earned | currency: currencySymbol}} </span>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    \n" +
    "                </table> -->\n" +
    "            </div>\n" +
    "\n" +
    "        </div>"
  );


  $templateCache.put('js/app/loyalty/templates/google-wallet.html',
    "		<div class=\"form-group\" id=\"saveToWallet\"></div>			hello  {{customerId}}"
  );


  $templateCache.put('js/app/loyalty/templates/order-detail.html',
    "\n" +
    "        <div class=\"amountSection\" ng-controller=\"OrderDetailCtrl\"  ng-if=\"isConfigMaintained\">\n" +
    "\n" +
    "            <div ng-if=\"thisUser.isMember && loyaltyConfig.showReward\">\n" +
    "\n" +
    "\n" +
    "                <table class=\"table\" style=\"background: rgba(0, 0, 0, 0)\">\n" +
    "                        \n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                <span id=\"confirmation-cash-redeemed-text\"> {{ 'REWARD_POINTS_SPENT_TEXT' | translate}} </span> \n" +
    "                            </td>\n" +
    "                            <td class=\"text-right\">\n" +
    "                                <span class=\"error\" id=\"confirmation-cash-redeemed\" >-{{points.redeemed}} </span>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "\n" +
    "                        <tr>\n" +
    "                            <td>\n" +
    "                                <span id=\"confirmation-cash-earned-text\"> {{ 'REWARD_POINTS_EARNED_TEXT' | translate}} </span> \n" +
    "                            </td>\n" +
    "                            <td class=\"text-right\">\n" +
    "                                <span class=\"text-green\" id=\"confirmation-cash-earned\" >{{points.earned}} </span>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    \n" +
    "                </table>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>"
  );


  $templateCache.put('js/app/loyalty/templates/preferred_language_modal.html',
    "<div  ng-if=\"isConfigMaintained\">\r" +
    "\n" +
    "	<div class=\"modal-header\">\r" +
    "\n" +
    "		<button type=\"button\" class=\"close\" ng-click=\"closeModal()\" data-dismiss=\"modal\">\r" +
    "\n" +
    "			<span aria-hidden=\"true\" id=\"language-close\">×</span><span id=\"language-close-label\" class=\"sr-only\">{{'CLOSE' | translate }}</span>\r" +
    "\n" +
    "		</button>\r" +
    "\n" +
    "   		<h4 class=\"modal-title\" id=\"language-title\">{{'UPDATE_PREFERRED_LANGUAGE' | translate }}</h4>\r" +
    "\n" +
    "  	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  	<div class=\"modal-body review-modal\">\r" +
    "\n" +
    "  		<form name=\"languageForm\" ng-submit=\"updatePreferredLanguage()\">\r" +
    "\n" +
    "  			\r" +
    "\n" +
    "  			<div class=\"row\">\r" +
    "\n" +
    "	            <div class=\"col-lg-12\">\r" +
    "\n" +
    "	                \r" +
    "\n" +
    "	            	<div class=\"form-group input-group\">\r" +
    "\n" +
    "				        <label class=\"input-group-addon control-label\" id=\"language-label\" for=\"language\">{{'PREFERRED_LANGUAGE' | translate}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "				        <select ng-if=\"thisUser.loyaltyUser.preferredLanguage\" type=\"text\" class=\"form-control\" id=\"language\" name=\"language\" ng-model=\"myUser.preferredLanguage\">\r" +
    "\n" +
    "				            <option  ng-repeat=\"language in site.languages\" ng-selected=\"{{thisUser.loyaltyUser.preferredLanguage == language}}\" value=\"{{language}}\"> \r" +
    "\n" +
    "				                {{language | translate}}\r" +
    "\n" +
    "				            </option>\r" +
    "\n" +
    "				        </select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "				        <select ng-if=\"!thisUser.loyaltyUser.preferredLanguage\" type=\"text\" class=\"form-control\" id=\"language\" name=\"language\" ng-model=\"myUser.preferredLanguage\">\r" +
    "\n" +
    "				            <option  ng-repeat=\"language in site.languages\" ng-selected=\"{{languageCode == language}}\" value=\"{{language}}\"> \r" +
    "\n" +
    "				                {{language | translate}}\r" +
    "\n" +
    "				            </option>\r" +
    "\n" +
    "				        </select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "				    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	            </div>\r" +
    "\n" +
    "	        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  			<div class=\"modal-footer\">\r" +
    "\n" +
    "	            <button type=\"button\" ng-click=\"closeModal()\" id=\"cancel-btn\" class=\"btn btn-secondary btn-lg\">{{'CANCEL' | translate}}</button>\r" +
    "\n" +
    "	            <button type=\"submit\" id=\"save-btn\" class=\"btn btn-primary btn-lg\" >{{'SAVE' | translate}}</button>\r" +
    "\n" +
    "	        </div>\r" +
    "\n" +
    "  			\r" +
    "\n" +
    "  			\r" +
    "\n" +
    "	    </form>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/app/loyalty/templates/product_rating.html',
    "<div class=\"product-rating-review\" ng-controller=\"RatingReviewCtrl\"  ng-if=\"isConfigMaintained\">\n" +
    "    <div class=\"rating-review-row\">\n" +
    "        <!-- <span>\n" +
    "			<rating class=\"product-rating\" id=\"rating-average\" ng-model=\"avgRating\" max=\"5\" readonly=\"true\"></rating>\n" +
    "		</span> -->\n" +
    "        <span class=\"product-rating\" id=\"rating-average\">\n" +
    "            \n" +
    "\n" +
    "             <i ng-if=\"!ratingShowFlag\" ng-repeat=\"rateStar in [1, 2, 3, 4, 5] track by $index\" class=\"glyphicon\" data-width=\"{{avgRatingView}}\" ng-class=\"{ 'glyphicon-star': $index <= avgRating,  'glyphicon-star-empty': $index > avgRating, 'avg': $index === avgRating }\"></i>\n" +
    "\n" +
    "            <i ng-if=\"ratingShowFlag\" ng-repeat=\"rateStar in [1, 2, 3, 4, 5] track by $index\" class=\"glyphicon\" data-width=\"{{avgRatingView}}\" ng-class=\"{ 'glyphicon-star': $index < avgRating,  'glyphicon-star-empty': $index >= avgRating, 'avg': ( $index + 1 ) === avgRating }\"></i>\n" +
    "\n" +
    "        </span>\n" +
    "        <span>\n" +
    "			<span><a ng-click=\"getProductReviews()\" id=\"reviews-link\" translate=\"{{ 'USER_REVIEW' }}\" translate-values=\"{ totalRatingReviews: totalRatingReviews}\"></a>\n" +
    "        </span>\n" +
    "        <span ng-if=\"thisUser.isUser\" ng-hide=\"customerExist===true\" id=\"rating-seperator\"> | </span>\n" +
    "        <span ng-if=\"thisUser.isUser\" ng-hide=\"customerExist===true\"><a ng-click=\"openWriteReviewModal()\" id=\"write-review\">{{'WRITE_REVIEW' | translate}}</a></span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/loyalty/templates/product_reviews.html',
    "<div class=\"product-reviews\"  ng-if=\"isConfigMaintained\">\n" +
    "    <section class=\"product-review\">\n" +
    "        <div class=\"form-group row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <h3 id=\"review-for\">{{'USER_REVIEW_FOR' | translate}} <a href=\"\" id=\"review-product-link\" ng-click = \"gotoProductDetailPage()\">{{product.product.name}}</a></h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group row\">\n" +
    "            <div class=\"col-md-3 \">\n" +
    "                <div class=\"product-image\">\n" +
    "                    <img class=\"lazyOwl\" id=\"review-product-image\" ng-src=\"{{product.product.media[0].url}}\" alt=\"productThumb\" ng-click=\"gotoProductDetailPage()\" />\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-3 product-rating-review\">\n" +
    "                <div class=\"form-group rating-review-row\">\n" +
    "                    <div class=\"marginBottom5\"><Label id=\"product-average-rating\">{{'AVERAGE_USER_RATING' | translate}} </Label></div>\n" +
    "                    <div class=\"marginBottom5\">\n" +
    "\n" +
    "                        <strong><span class=\"ratingAvg\" id=\"average-rating-model\" ng-bind=\"avgRatingModel\"></span></strong>\n" +
    "                         <span class=\"product-rating\" id=\"rating-average\">\n" +
    "\n" +
    "                            <i ng-if=\"!ratingShowFlag\" ng-repeat=\"rateStar in [1, 2, 3, 4, 5] track by $index\" class=\"glyphicon\" data-width=\"{{avgRatingView}}\" ng-class=\"{ 'glyphicon-star': $index <= avgRating,  'glyphicon-star-empty': $index > avgRating, 'avg': $index === avgRating }\"></i>\n" +
    "\n" +
    "                            <i ng-if=\"ratingShowFlag\" ng-repeat=\"rateStar in [1, 2, 3, 4, 5] track by $index\" class=\"glyphicon\" data-width=\"{{avgRatingView}}\" ng-class=\"{ 'glyphicon-star': $index < avgRating,  'glyphicon-star-empty': $index >= avgRating, 'avg': ( $index + 1 ) === avgRating }\"></i>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <span id=\"product-rating-label-1\" ng-show=\"totalRatingReviews > 1\" translate=\"{{ 'RATINGS' }}\" translate-values=\"{ totalRatingReviews: totalRatingReviews}\"></span>\n" +
    "                        <span id=\"product-rating-label-2\" ng-show=\"totalRatingReviews === 0 || totalRatingReviews === 1\" translate=\"{{ 'SINGLE_RATING' }}\" translate-values=\"{ totalRatingReviews: totalRatingReviews}\"></span>\n" +
    "                    </div>\n" +
    "                    <div ng-if=\"thisUser.isUser\" ng-hide=\"customerExist===true\">\n" +
    "                        <button class=\"btn btn-primary\" id=\"review-add-button\" ng-click=\"openWriteReviewModal()\">{{'ADD_REVIEW' | translate}}</button>\n" +
    "                    </div>\n" +
    "                    <div ng-if=\"thisUser.isUser\" ng-show=\"customerExist===true\">\n" +
    "                        \n" +
    "                        <div class=\"\"><Label id=\"my-rating-label\">{{'MY_RATING' | translate}}</Label></div>\n" +
    "                        <strong><span id=\"my-rating-value\" class=\"ratingAvg\" id=\"my-ratings\" ng-bind=\"myRating\"></span></strong>\n" +
    "                        <span>\n" +
    "                            <rating id=\"my-review-stars\" class=\"product-rating myRatingStar\" ng-model=\"myRating\" max=\"5\" readonly=\"true\"></rating>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                   \n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <form class=\"\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <strong><span id=\"total-rating-review\" translate=\"{{ 'USER_RATED' }}\" translate-values=\"{ totalRatingReviews: totalRatingReviews}\"></span></strong>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\" ng-repeat=\"rating in ratingArray.slice().reverse() track by $index\">\n" +
    "                        <div class=\"col-sm-2\"><span id=\"{{ 'rating-stars' + $index }}\" translate=\"{{ 'STARS' }}\" translate-values=\"{ starValue: 5 - $index}\"></span></div>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <progressbar max=\"100\" value=\"ratingToPercentage(rating, totalRatingReviews)\" id=\"{{ 'rating-stars-progress-' + $index }}\" type=\"warning\" class=\"active progressMargin\">\n" +
    "                            </progressbar>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-1\"><span ng-bind=\"rating\" id=\"{{ 'rating-stars-counts-' + $index }}\"></span></div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "    <section class=\"customer-reviews\">\n" +
    "        <div class=\" row\">\n" +
    "            <div class=\" form-group col-sm-12 userReviewHeading\">\n" +
    "                <h3 id=\"user-review-heading\" translate=\"{{ 'USER_REVIEW_LIST' }}\" translate-values=\"{ totalReviewsToShow: totalReviewsToShow}\"></h3>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row product-grid\" infinite-scroll=\"getProductReviewRating()\">\n" +
    "            <div class=\"form-group \" ng-repeat=\"review in reviewRatingData \">\n" +
    "                <div class=\"form-group row customer-review-row\" ng-show=\"review.reviewComment!== ''\">\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <div ng-show=\"review.reviewerName!==' '\" class=\"marginBottom5\"><span class=\"\" id=\"{{ 'review-reviewerName' + $index }}\">{{review.reviewerName}}</span></div>\n" +
    "                        <div ng-show=\"review.reviewerName===' '\" class=\"marginBottom5\"><span class=\"\" id=\"{{ 'review-dummyReviewerName' + $index }}\">{{'A_USER' | translate}}</span></div>\n" +
    "                        <div class=\"marginBottom5\">\n" +
    "                            <rating class=\"product-rating\" id=\"{{ 'review-reviewerRating' + $index }}\" ng-model=\"review.rating\" max=\"5\" readonly=\"true\"></rating>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <span id=\"{{ 'review-dateOfReview' + $index }}\">{{review.metadata.createdAt | date: 'medium'}}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-8\">\n" +
    "                        <div class=\"marginBottom5\"><strong id=\"{{ 'review-reviewTitle' + $index }}\">{{review.reviewTitle}}</strong></div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <p id=\"{{ 'review-reviewComment' + $index }}\">{{review.reviewComment}}</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/loyalty/templates/referral_modal.html',
    "<div  ng-if=\"isConfigMaintained\">\n" +
    "	<div class=\"modal-header\">\n" +
    "		<button type=\"button\" class=\"close\" ng-click=\"closeModal()\" data-dismiss=\"modal\">\n" +
    "			<span aria-hidden=\"true\" id=\"referral-close\">×</span><span id=\"referral-close-label\" class=\"sr-only\">{{'CLOSE' | translate }}</span>\n" +
    "		</button>\n" +
    "   		<h4 class=\"modal-title\" id=\"referral-title\">{{'REF_TIT' | translate }}</h4>\n" +
    "  	</div>\n" +
    "\n" +
    "  	<div class=\"modal-body review-modal\">\n" +
    "  		<form name=\"referralForm\">\n" +
    "  			\n" +
    "  			\n" +
    "  			<div class=\"row\">            \n" +
    "	          	<div class=\"col-sm-12 \">\n" +
    "	          		<div class=\"\">\n" +
    "		          		<span class=\"control-label referralText\" id=\"referral-description\">{{'REF_MOD_DESC' | translate }}</span>  \n" +
    "		           	</div> \n" +
    "	          		<div class=\"form-group\" ng-class=\"{ 'has-error': referralForm.emailList.$invalid && referralForm.emailList.$dirty || !disableInvitation}\">\n" +
    "					\n" +
    "					<!-- <tags-input id=\"referral-email-input\" name=\"emailList\" ng-model=\"referral.emailList\" placeholder=\"{{'EMAIL_ADDRESS' | translate }}\" allowed-tags-pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" max-tags=5 min-tags=0 add-on-space='true' add-on-comma = 'true'></tags-input> -->\n" +
    "						<input\n" +
    "							type=\"text\"\n" +
    "							ui-select2=\"select2Options\"\n" +
    "							id=\"referral-email-input\"\n" +
    "							ng-model=\"referral.emailList\"\n" +
    "							placeholder=\"{{'EMAIL_ADDRESS' | translate }}\"\n" +
    "							ng-change=\"checkEmailValidity(referral.emailList)\"\n" +
    "							style=\"width: 100%;\"\n" +
    "							name = \"emailList\"\n" +
    "						/>\n" +
    "						<span class=\"referralText\" id=\"referral-description\">{{'REF_FRND_INFO' | translate }}</span>\n" +
    "					</div>\n" +
    "	           	</div> \n" +
    "	        </div>\n" +
    "  			<div class=\"form-group row\">            \n" +
    "	          	<div class=\"col-sm-12\">\n" +
    "					<button type=\"submit\" id=\"referral-send-button\" class=\"btn btn-primary btn-block\" ng-click=\"sendInvitation(referral, referralForm)\" ng-disabled=\"!referralForm.emailList.$valid || !disableInvitation\" class=\"form-control\">{{'SEND_INV' | translate }}</button>\n" +
    "	           	</div> \n" +
    "	        </div>\n" +
    "	    </form>\n" +
    "	</div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('js/app/loyalty/templates/reward_history.html',
    "\n" +
    "\n" +
    "	<div ng-controller=\"RewardHistoryCtrl\"  ng-if=\"isConfigMaintained\">\n" +
    "\n" +
    "		<div ng-show=\"thisUser.isMember && loyaltyConfig.showReward\">\n" +
    "\n" +
    "			<div >\n" +
    "\n" +
    "				  <div class=\"row form-group reward-details\">\n" +
    "						<div class=\"col-sm-4\">\n" +
    "							<h3 class=\"section-headline head\"><i id=\"reward-history-label\">{{ 'REWARD_HISTORY' | translate}}</i></h3>\n" +
    "						</div>\n" +
    "\n" +
    "					<div class=\"row form-group\">\n" +
    "						<div class=\"col-sm-12\">\n" +
    "							<div class=\"table-responsive hidden-sm hidden-xs\">\n" +
    "								<table class=\"table\">\n" +
    "									<thead>\n" +
    "										<tr>\n" +
    "				                            <th class=\"reward-table-padding\" >\n" +
    "				                            	<span id=\"rewards-date\">{{'DATE' | translate}}</span>\n" +
    "				                            </th>\n" +
    "				                            <th width=\"30%\" id=\"rewards-activity\">{{'ACTIVITY' | translate}}</th>\n" +
    "				                            <th width=\"25%\">\n" +
    "				                            	<div class=\"text-right points-right-padding\">\n" +
    "				                            		<span id=\"rewards-points\" ng-bind=\"'POINTS' | translate\"></span>\n" +
    "				                            	</div>\n" +
    "				                            </th>\n" +
    "				                            <th width=\"15%\"></th>\n" +
    "										</tr>\n" +
    "									</thead>\n" +
    "									<tbody>\n" +
    "										<tr  ng-repeat=\"activity in memberActivities| limitTo: showHistoryFilter\">\n" +
    "											<td class=\"reward-table-padding\" id=\"{{ 'rewards-date-' + $index }}\"> {{activity.metadata.createdAt | date: 'medium'}} </td>\n" +
    "											\n" +
    "											<td ng-if=\"activity.activityType !== 'ORDER'\" id=\"{{ 'rewards-activity-' + $index }}\">{{activity.activityType | translate}}</td>\n" +
    "											<td ng-if=\"activity.activityType === 'ORDER'\" id=\"{{ 'rewards-activity-' + $index }}\"> <a ui-sref=\"base.orderDetail({orderId: activity.refId})\"> {{activity.activityType | translate}} </a> </td>\n" +
    "\n" +
    "											<td>\n" +
    "												<strong class=\"point\" style=\"padding-right: 25px;\" ng-class= \"{'redeemRed':activity.activityType=='REDEEM' ||activity.activityType=='DEDUCT' ||activity.activityType=='EXPIRATION', 'orderGreen':activity.activityType=='ORDER' || activity.activityType=='REGISTRATION' || activity.activityType=='AWARD' || activity.activityType=='RATING' || activity.activityType=='REVIEW' ||activity.activityType=='ACCRUAL' || activity.activityType=='REFERRAL'}\">\n" +
    "													<div class=\"text-right\" id=\"{{ 'rewards-points-' + $index }}\">\n" +
    "													<span ng-if=\"activity.activityType=='REDEEM' || activity.activityType=='DEDUCT' || activity.activityType=='EXPIRATION'\">-</span>\n" +
    "													{{activity.transactionPoints || 0 | number:0}}\n" +
    "													</div>\n" +
    "													\n" +
    "												</strong>\n" +
    "											</td>\n" +
    "											<td></td>\n" +
    "											<!-- <td>{{point.qualifyingPoints}}</td> -->\n" +
    "										</tr>\n" +
    "									</tbody>\n" +
    "								</table>\n" +
    "							</div>\n" +
    "				            <div class=\"text-center\">			\n" +
    "				                <button class=\"btn btn-link\" ng-show=\" ( !showHistoryToggle && memberActivities.length > 10 ) \" ng-click=\"showHistoryToggle =! showHistoryToggle; getMemberActivities(thisUser.loyaltyUser.memberId)\">\n" +
    "				                	<span>{{'SHOW_ALL' | translate}}</span>\n" +
    "				                	<span class=\"glyphicon glyphicon-chevron-down\"></span>\n" +
    "				                </button>			\n" +
    "				                <button class=\"btn btn-link\" ng-show=\"showHistoryToggle\" ng-click=\"showHistoryToggle =! showHistoryToggle; getMemberActivities(thisUser.loyaltyUser.memberId)\">\n" +
    "				                	<span>{{'SHOW_LESS' | translate}}</span>\n" +
    "				                	<span class=\"glyphicon glyphicon-chevron-up\"></span>\n" +
    "				                </button>\n" +
    "				            </span>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "					</div>\n" +
    "\n" +
    "\n" +
    "					   <div class=\"hidden-md hidden-lg row\">\n" +
    "					       <div ng-repeat=\"activity in memberActivities| limitTo: showHistoryFilter\" class=\"col-sm-4 col-xs-12 orderHistoryCard\">\n" +
    "					           <div class=\"cardStatusIdentifier pull-left\" ></div>\n" +
    "					           <div class=\"panel\">\n" +
    "					               <div class=\"panel-body \" >\n" +
    "					                   <div class=\"row\">\n" +
    "					                       <div class=\"col-sm-8 col-xs-8 leftCol\">\n" +
    "					                           <p id=\"{{ 'rewards-date-' + $index }}\">\n" +
    "					                           <strong id=\"{{ 'rewards-date-title-' + $index }}\">{{'DATE' | translate}}</strong></br>\n" +
    "					                            {{activity.metadata.createdAt | date: 'medium'}} \n" +
    "					                           </p>\n" +
    "					                           <p id=\"{{ 'rewards-activity-' + $index }}\">\n" +
    "					                               <strong id=\"{{ 'rewards-activity-title-' + $index }}\">{{'ACTIVITY' | translate}}</strong></br>\n" +
    "					                                 {{activity.activityType | translate}}\n" +
    "					                           </p>\n" +
    "					                       </div>\n" +
    "					                       <div class=\"col-sm-4 col-xs-4\" ng-class= \"{'redeemRed':activity.activityType=='REDEEM' ||activity.activityType=='DEDUCT' ||activity.activityType=='EXPIRATION', 'orderGreen':activity.activityType=='ORDER' || activity.activityType=='REGISTRATION' || activity.activityType=='AWARD' || activity.activityType=='RATING' || activity.activityType=='REVIEW' ||activity.activityType=='ACCRUAL' || activity.activityType=='REFERRAL'}\">\n" +
    "					                          <p >\n" +
    "					                        	<span id=\"{{ 'rewards-minus-' + $index }}\" ng-if=\"activity.activityType=='REDEEM' || activity.activityType=='DEDUCT' || activity.activityType=='EXPIRATION'\">-</span>\n" +
    "					                        	<strong id=\"{{ 'rewards-points-' + $index }}\">\n" +
    "													{{activity.transactionPoints || 0 | number:0}}\n" +
    "					                        	</strong>\n" +
    "					                          </p>\n" +
    "					                       </div>\n" +
    "					                   </div>\n" +
    "					               </div>\n" +
    "					           </div>\n" +
    "					       </div>\n" +
    "					   </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "	</div>"
  );


  $templateCache.put('js/app/loyalty/templates/reward_points_product_details.html',
    "<div ng-controller=\"RewardsPointCtrl\"  ng-if=\"isConfigMaintained\">\n" +
    "	<div ng-if=\"thisUser.isMember && loyaltyConfig.showReward\">\n" +
    "	  	<section class=\"gray points-calc\">\n" +
    "			<div class=\"row-group\">\n" +
    "				<h4 class=\"text-green text-center\">\n" +
    "					<i id=\"gift-glyphicon\" class=\"glyphicon glyphicon-gift\"></i>\n" +
    "				</h4>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"row-group\">\n" +
    "\n" +
    "				<div ng-show=\"pointsProcessing\">\n" +
    "					<h4 id=\"product-processing-text\">{{ 'PROCESSING_TEXT' | translate}}</h4>\n" +
    "				</div>\n" +
    "				<div ng-hide=\"pointsProcessing\">\n" +
    "					<h4 id=\"product-points\" ng-if=\"!loyaltyConfig.showCashBal\" class=\"text-green\"><b><i translate=\"{{ 'EARN_POINTS_DESCRIPTION' }}\" translate-values=\"{ points: earning.points}\"></i></b></h4>\n" +
    "					<h4 id=\"product-cash\" ng-if=\"loyaltyConfig.showCashBal\" class=\"text-center text-green\"><b><i> {{'REWARD_CASH_EARNED_TEXT' | translate }} {{earning.cash | currency: currencySymbol}}</i></b></h4>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</section>\n" +
    "	</div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/loyalty/templates/signup_for_loyalty_program.html',
    "<div class=\"col-xs-12 col-sm-12 text-left \"  ng-if=\"isConfigMaintained\">\n" +
    "    <div class=\"\" ng-controller=\"LoyaltyProgramCtrl\">\n" +
    "        <div class=\"form-group\" ng-controller=\"registrationController\">\n" +
    "            <div ng-show=\"loyaltyConfig.showReward\">\n" +
    "                <div class=\"checkbox loyalty\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"wantLoyaltyProgram\" id=\"want-loyalty-program\" />\n" +
    "                    <label for=\"want-loyalty-program\" id=\"signup-description-label\" translate=\"{{ 'SIGN_UP_DESCRIPTION' }}\" translate-values=\"{ name: loyaltyProgram.loyaltyProgramName}\"></label>\n" +
    "                </div>\n" +
    "                <div class=\"earnPointText userBottomMargin\" ng-if=\"wantLoyaltyProgram && loyaltyConfig.enableTellAFriend\"><span>{{'REFER_A_FRIEND_INFO_TEXT' | translate}}</span></div>\n" +
    "                <div class=\"form-group input-group\" ng-if=\"wantLoyaltyProgram && loyaltyConfig.enableTellAFriend\">\n" +
    "                    <label class=\"input-group-addon control-label\" id=\"referral-code-label\" for=\"referralCode\">{{'REFERRALCODE' | translate}}</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"referralCode\" name=\"referralCode\" ng-model=\"user.referraledCode\" ng-focus=\"clearErrors()\" />\n" +
    "                </div>\n" +
    "                <!-- <div class=\"form-group input-group\" ng-if=\"wantLoyaltyProgram\">\n" +
    "                    <label class=\"input-group-addon control-label\" id=\"preferred-language-label\" for=\"language\">{{'PREFERRED_LANGUAGE' | translate}}</label>\n" +
    "                    <select type=\"text\" class=\"form-control\" id=\"language\" name=\"language\" ng-model=\"user.preferredLanguage\">\n" +
    "                        <option  ng-repeat=\"language in site.languages\" value=\"{{language}}\" ng-selected=\"{{languageCode == language}}\" > \n" +
    "                            {{language | translate}}\n" +
    "                        </option>\n" +
    "                    </select>\n" +
    "                </div> -->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/loyalty/templates/signup_for_loyalty_program_modal.html',
    "<div  ng-if=\"isConfigMaintained\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <h4 class=\"modal-title\" id=\"signup-program-title\" translate=\"{{ 'SIGN_UP_TITLE_PROGRAM_NAME' }}\" translate-values=\"{ programName: userProgramName}\"></h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"form-group \" ng-if=\"wrongReferral\">\n" +
    "            <span translate=\"{{ 'WRONG_REFER_A_FRIEND_INFO_TEXT1' }}\" translate-values=\"{ programName: userProgramName}\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"userBottomMargin earnPointText\" ng-if=\"wrongReferral\">{{'WRONG_REFER_A_FRIEND_INFO_TEXT2' | translate}}</div>\n" +
    "        <div class=\"earnPointText userBottomMargin\" ng-if=\"!wrongReferral\"><span>{{'REFER_A_FRIEND_INFO_TEXT' | translate}}</span></div>\n" +
    "        <div class=\"form-group input-group\" ng-if=\"configData.enableTellAFriend || loyaltyConfig.enableTellAFriend\">\n" +
    "            <span class=\"input-group-addon\"><label class=\"control-label\" id=\"signup-referralcode-text\">{{'REFERRALCODE' | translate}}</label></span>\n" +
    "            <input type=\"text\" id=\"signup-referralcode\" class=\"form-control\" name=\"\" ng-model=\"myUser.referraledCode\" ng-focus=\"clearErrors()\" />\n" +
    "        </div>\n" +
    "    <!-- \n" +
    "        <div class=\"form-group input-group\">\n" +
    "            <label class=\"input-group-addon control-label\" id=\"preferred-language-label\" for=\"language\">{{'PREFERRED_LANGUAGE' | translate}}</label>\n" +
    "            <select type=\"text\" class=\"form-control\" id=\"language\" name=\"language\" ng-model=\"myUser.preferredLanguage\">\n" +
    "                <option  ng-repeat=\"language in site.languages\" ng-selected=\"{{languageCode == language}}\" value=\"{{language}}\"> \n" +
    "                    {{language | translate}}\n" +
    "                </option>\n" +
    "            </select>\n" +
    "        </div> -->\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" id=\"signup-close-button\" class=\"btn btn-default\" ng-click=\"closeModal()\">{{'CLOSE' | translate }}</button>\n" +
    "        <button type=\"submit\" class=\"btn btn-primary\" id=\"signup-button\" ng-disabled=\"disableSave\" ng-click=\"registerCustomerForProgram()\">{{'SIGN_UP' | translate}}</button>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/loyalty/templates/success_modal.html',
    "<div  ng-if=\"isConfigMaintained\">\n" +
    "	<div class=\"modal-header\">\n" +
    "		<button type=\"button\" id=\"success-modal-close-button\" class=\"close\" ng-click=\"closeModal()\" data-dismiss=\"modal\">\n" +
    "			<span aria-hidden=\"true\" id=\"success-modal-close\">×</span><span class=\"sr-only\" id=\"success-modal-close-text\">{{'CLOSE' | translate }}</span>\n" +
    "		</button>\n" +
    "   		<h4 class=\"modal-title\" id=\"success-modal-label\">{{'SUCCESS' | translate}}</h4>\n" +
    "  	</div>\n" +
    "\n" +
    "  	<div class=\"modal-body review-modal\">\n" +
    "  		<form>\n" +
    "  			<div class=\"form-group row\">            \n" +
    "	          	<div class=\"col-sm-12\">\n" +
    "	          		<div class=\"\">\n" +
    "	          			<label class=\"control-label\" id=\"success-modal-desc\">{{'SUCCESS_DESC' | translate}}</label>\n" +
    "	          		</div>\n" +
    "	          		\n" +
    "	           	</div> \n" +
    "	        </div>\n" +
    "  			<div class=\"form-group row\" >            \n" +
    "	          	<div class=\"col-sm-12\">\n" +
    "	          		\n" +
    "	          		<small class=\"control-label\" id=\"success-modal-referred-emails\" ng-bind=\"referredEmails\"></small> \n" +
    "	          		\n" +
    "	           	</div> \n" +
    "	        </div>\n" +
    "  			<div class=\" row\">            \n" +
    "	          	<div class=\"col-sm-12\">\n" +
    "					* <span class=\"control-label\" id=\"success-modal-success-warning\"> {{'SUCCESS_WARNING' | translate}}</span>\n" +
    "	           	</div> \n" +
    "	        </div>\n" +
    "  			\n" +
    "	    </form>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"modal-footer\">\n" +
    "		<div class=\"clearfix\">\n" +
    "			<button type=\"button\" id=\"success-close-modal\" class=\"btn btn-primary pull-right\" ng-click=\"closeModal()\">{{'CLOSE' | translate }}</button>\n" +
    "		</div>\n" +
    "	</div> \n" +
    "</div>"
  );


  $templateCache.put('js/app/loyalty/templates/user_reward_program.html',
    "\n" +
    "<div ng-controller=\"LoyaltyUserCtrl\">\n" +
    "\n" +
    "	<div ng-if=\"thisUser.isUser\" ng-if=\"isConfigMaintained\">\n" +
    "\n" +
    "		\n" +
    "		<div class=\"segment\" ng-if=\"thisUser.isMember && configData.showReward\">			\n" +
    "			\n" +
    "			<div class=\"userBottomMargin\">		\n" +
    "						<span class=\"title\" id=\"rewards-enrolled-text\" translate=\"{{ 'ENROLLED' }}\" translate-values=\"{ programName: thisUser.program}\"></span> \n" +
    "			</div>\n" +
    "			<div class=\"row form-group userInfoRow desktopUserInfo\" >		\n" +
    "				<div class=\"col-sm-3 col-md-3\" ng-if=\"thisUser.loyaltyUser.referralCode \n" +
    "				&& configData.enableTellAFriend\">\n" +
    "						<span class=\"title\" id=\"referral-code-label\">{{'REFERRALCODE' | translate}} : </span> \n" +
    "						<span class=\"info\"><strong class=\"text-info\" id=\"my-referral-code\" ng-bind=\"thisUser.loyaltyUser.referralCode\">-</strong></span>\n" +
    "						<!-- <span class=\"\"><button class=\"btn btn-link\" ng-click=\"openReferralModal()\" ><span class=\"glyphicon glyphicon-envelope tell_a_friend_icon\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{'TELL_A_FRIEND' | translate}}\"></span></button></span> -->\n" +
    "						<button class=\"btn btn-primary btn-sm userMargin\" id=\"invite-friend-button\" ng-click=\"openReferralModal()\">{{'INVITE_FRIEND' | translate}}</button>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"hidden-xs col-sm-offset-1 col-sm-1 editLinkContainer\" ng-if=\"thisUser.isMember\">\n" +
    "					<a ng-click=\"openPreferredLanguageModal()\"><span id=\"edit-user-info\" class=\"glyphicon glyphicon-pencil\"></span></a>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"hidden-xs col-sm-3 col-md-3\" ng-if=\"thisUser.isMember\">\n" +
    "	                <span class=\"dataLabel\">{{'PREFERRED_LANGUAGE' | translate}}</span>\n" +
    "	                {{thisUser.loyaltyUser.preferredLanguage | translate}}\n" +
    "	                <span data-toggle=\"tooltip\" title=\"{{'PREFERRED_LANGUAGE_TOOLTIP' | translate}}\" class=\"glyphicon glyphicon-question-sign\"></span>\n" +
    "	            </div>\n" +
    "\n" +
    "\n" +
    "				<div class=\" col-sm-8 hidden-sm hidden-md hidden-lg\" ng-if=\"thisUser.isMember\">\n" +
    "					<div class=\"row\">\n" +
    "						\n" +
    "			            <div class=\"col-xs-8\">\n" +
    "			                <div class=\"mobileDataSection\">\n" +
    "			                    <span class=\"dataLabel locale\">{{'PREFERRED_LANGUAGE' | translate}}</span>\n" +
    "			                    {{thisUser.loyaltyUser.preferredLanguage | translate}}\n" +
    "			                    <span data-toggle=\"tooltip\" title=\"{{'PREFERRED_LANGUAGE_TOOLTIP' | translate}}\" class=\"glyphicon glyphicon-question-sign\"></span>\n" +
    "			                </div>\n" +
    "\n" +
    "			            </div>\n" +
    "			            <div class=\"col-xs-4\">\n" +
    "			                <button class=\"btn btn-secondary btn-md pull-right\" ng-click=\"openPreferredLanguageModal()\">{{'EDIT' | translate}}</button>\n" +
    "			            </div>\n" +
    "		            </div>\n" +
    "\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "			<div ng-if=\"displayRewardInfo\">\n" +
    "\n" +
    "				<div id=\"redeem-text-info\" class='textInfo floatRight' translate=\"{{ 'REEDEEM_TEXT_INFO' }}\" translate-values=\"{ redeemPoints: totalRedeemablePoints}\"></div>\n" +
    "				<br>	\n" +
    "				<div class=\"progress-container\">\n" +
    "\n" +
    "					<progressbar id=\"points-progress-bar\" value=\"dynamicValue\" type=\"primary\">\n" +
    "						\n" +
    "\n" +
    "					</progressbar> \n" +
    "\n" +
    "					<span id=\"user-tier\" class=\"floatleft padleft10px info\" translate=\"{{ 'USER_TIER' }}\" translate-values=\"{ userTier: userPresentTier}\"></span>\n" +
    "					<span id=\"next-tier\" ng-if=\"dispNextTierFlag\" class=\"floatRight padright10px info\" translate=\"{{ 'REEDEEM_TEXT_INFO_1' }}\" translate-values=\"{ remainingPoints: remainingPoints, upgradadableTier: updagradableTier}\"></span>	\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"row marginTop100\">\n" +
    "\n" +
    "					<div class=\" col-sm-1\" ng-if=\"showAddToAppleWallet\">\n" +
    "						<a ng-href=\"{{appleWalletUrl}}\" class=\"icon pull-left\">\n" +
    "			                <span> <img src=\"img/Add_to_Apple_Wallet_rgb_US-UK.svg\"> </span>\n" +
    "			            </a>\n" +
    "			        </div>\n" +
    "\n" +
    "					<div class=\" col-sm-2\">\n" +
    "						<div id=\"saveToWallet\"></div>\n" +
    "					</div>	\n" +
    "\n" +
    "					\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "				\n" +
    "\n" +
    "		\n" +
    "\n" +
    "\n" +
    "		<div class=\"form-group\" ng-if=\"!thisUser.isMember && configData.showReward\">\n" +
    "			<button class=\"btn btn-primary\" id=\"get-membership-button\" ng-click=\"getLoyaltyProgramMembership()\"  translate=\"{{ 'SIGN_UP_TITLE_PROGRAM_NAME' }}\" translate-values=\"{ programName: userProgramName}\"></button>\n" +
    "		</div>	\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "	</div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/loyalty/templates/write_product_review.html',
    "<div  ng-if=\"isConfigMaintained\">\n" +
    "\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button id=\"write-review-close-button\" type=\"button\" class=\"close\" ng-click=\"closeModal()\" data-dismiss=\"modal\">\n" +
    "            <span aria-hidden=\"true\" id=\"write-review-close\">×</span><span class=\"sr-only\" id=\"write-review-close-text\">{{'CLOSE' | translate}}</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\" id=\"write-review-product-name\" translate=\"{{ 'RATE_REVIEW' }}\" translate-values=\"{ product: product.product.name}\"></h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body review-modal\">\n" +
    "        <form>\n" +
    "            <div class=\"form-group row\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-12\">\n" +
    "\n" +
    "                            <label class=\"control-label pull-left\" id=\"write-review-ratingText\">{{'RATING' | translate}}</label>\n" +
    "                            <strong ng-if=\"thisUser.isMember && loyaltyConfig.showReward && showRatingPoint\"><span ng-show=\"thisUser.loyaltyUser.memberId\" class=\"userMargin pull-right \" id=\"write-review-ratingPointText\" ng-class=\"{ 'earnPointText' : review.rating===0,'earnedPointText' : review.rating > 0 }\" translate=\"{{ 'ADVOCACY_POINTS' }}\" translate-values=\"{ point: ratingPoint}\"></span></strong>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group row\">\n" +
    "                        <div class=\"col-sm-12\">\n" +
    "                            <rating class=\"product-rating\" ng-model=\"review.rating\" max=\"5\" id=\"write-review-ratings\"></rating>\n" +
    "                            <strong ng-show=\"review.rating > 0\"><span class=\"userMargin\" id=\"write-review-ratingTextInfo-1\">{{ratingText[review.rating]|translate}}</span></strong>\n" +
    "                            <strong ng-show=\"errorRating\" class=\"text-danger\" ng-hide=\"review.rating > 0 || !errorRating\"><span class=\"userMargin\" id=\"write-review-ratingTextInfo-2\">{{ratingText[review.rating]|translate}}</span></strong>\n" +
    "\n" +
    "                        </div>\n" +
    "                        \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group row\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <label class=\"control-label pull-left\" id=\"write-review-labelText\">{{'WRITE_A_REVIEW' | translate}}</label>\n" +
    "                    <strong ng-if=\"thisUser.isMember && loyaltyConfig.showReward && showReviewPoint\"><span ng-show=\"thisUser.loyaltyUser.memberId\" class=\"userMargin pull-right\" id=\"write-review-reviewPointText\" translate=\"{{ 'ADVOCACY_POINTS' }}\" translate-values=\"{ point: reviewPoint}\" ng-class=\"{ 'earnPointText' : review.reviewComment==='','earnedPointText' : review.reviewComment!==''}\" ></span></strong>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group row\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <input type=\"text\" id=\"write-review-reviewTitle\" ng-model=\"review.reviewTitle\" placeholder=\"{{'REVIEW_TITLE' | translate }}\" class=\"form-control\" />\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group row\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <textarea ng-model=\"review.reviewComment\" id=\"write-review-reviewComment\" placeholder=\"{{'REVIEW_DESC' | translate }}\" class=\"form-control\"></textarea>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <div class=\"clearfix\">\n" +
    "            <button type=\"button\" class=\"btn btn-default pull-left\" id=\"write-review-noThanksButton\" ng-click=\"closeModal()\">{{'NO_THANKS' | translate}}</button>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary pull-right\" id=\"write-review-submitButton\" ng-click=\"postReviewRating(review)\" ng-disabled=\"disabledSave\">{{'SUBMIT' | translate}}</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/products/templates/product-detail.html',
    "<!-- bread crumbs -->\n" +
    "<ybreadcrumb yitem=\"breadcrumbData\" size=\"'small'\"></ybreadcrumb>\n" +
    "\n" +
    "<div class=\"productDetailsContainer\" ng-cloak>\n" +
    "    <section class=\"white\">\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <!-- product gallery -->\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <div class=\"product-gallery\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <product-img-carousel images=\"product.media\"></product-img-carousel>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- product details -->\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <div class=\"product-details text-center\">\n" +
    "\n" +
    "                    <!-- product name -->\n" +
    "                    <h1 class=\"pageTitle\">{{product.name}}</h1>\n" +
    "\n" +
    "                    <div ng-if=\"product.isBuyable && product.prices[0]\">\n" +
    "                        <!-- product sale price -->\n" +
    "                        <div ng-if=\"product.prices[0].salePrice\" class=\"price\">\n" +
    "                            <span id=\"original-price\" class=\"price originalPrice\"><strike>{{ product.prices[0].originalAmount | currency: currencySymbol }}</strike></span>\n" +
    "                            <span id=\"sales-price\" class=\"price salesPrice\">{{product.prices[0].effectiveAmount | currency: currencySymbol}}</span>\n" +
    "                            <span class=\"priceUnit salesPrice\" ng-if=\"product.prices[0].measurementUnit\">{{product.prices[0].measurementUnit.quantity}} {{product.prices[0].measurementUnit.unitCode}}</span>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!-- product price -->\n" +
    "                        <div ng-if=\"!product.prices[0].salePrice\" class=\"price\">\n" +
    "                            <span id=\"effective-amount\" class=\"price\">{{product.prices[0].effectiveAmount | currency: currencySymbol}}</span>\n" +
    "                            <span id=\"measurement-unit-quantity\" class=\"priceUnit\" ng-if=\"product.prices[0].measurementUnit\">{{product.prices[0].measurementUnit.quantity}} {{product.prices[0].measurementUnit.unitCode}}</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <!-- product tax -->\n" +
    "                    <div id=\"tax-message\" class=\"taxMessage\" ng-if=\"!!taxConfiguration && taxConfiguration.label\">\n" +
    "                        <div ng-if=\"taxConfiguration.label.length <= 60 || taxConfiguration.seeMoreClicked\">\n" +
    "                            {{taxConfiguration.label}}\n" +
    "                        </div>\n" +
    "                        \n" +
    "\n" +
    "                        <div ng-if=\"taxConfiguration.label.length > 60 && !taxConfiguration.seeMoreClicked\">\n" +
    "                            {{taxConfiguration.shortenedLabel}}... \n" +
    "                            <a ng-click=\"taxConfiguration.seeMoreClicked = true\">{{'MORE' | translate}}</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"review-rating\" ng-include src=\"'js/app/loyalty/templates/product_rating.html'\"></div>\n" +
    "\n" +
    "\n" +
    "                    <!-- product options -->\n" +
    "                    <product-options variants=\"variants\" on-active-variant-changed=\"onActiveVariantChanged(activeVariant)\"></product-options>\n" +
    "\n" +
    "                    <div ng-if=\"product.isBuyable\">\n" +
    "                        <form action=\"\" class=\"cartPanel\" ng-show=\"product.prices[0] && product.inStock\">\n" +
    "\n" +
    "                            <!-- product quantity -->\n" +
    "                            <div class=\"row product-options\">\n" +
    "                                <div class=\"col-md-8 col-md-offset-2 custom-select-container\">\n" +
    "                                    <div class=\"form-group input-group qty\">\n" +
    "                                        <label class=\"input-group-addon control-label\" for=\"qty\">{{'QTY' | translate}}: </label>\n" +
    "                                        <input quantity-input ng-max=\"10000000\" type=\"number\" id=\"qty\" min=\"1\" step=\"1\" pattern=\"\\d*\" class=\"form-control quantity\" ng-model=\"$parent.productDetailQty\"\n" +
    "                                            ng-change=\"changeQty(event)\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "\n" +
    "                                <!-- error notification -->\n" +
    "                                <div ng-if=\"error\" class=\"col-md-8 col-md-offset-2\">\n" +
    "                                    <div class=\"error\">\n" +
    "                                        <small class=\"help-inline has-error\">\n" +
    "                                            {{'ERROR_ADDING_TO_CART' | translate}}\n" +
    "                                        </small>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <!-- add to cart -->\n" +
    "                                <div class=\"col-md-8 col-md-offset-2\">\n" +
    "                                    <button id=\"buy-button\" type=\"button\" class=\"btn btn-primary btn-block buyButton\" ng-click=\"addToCartFromDetailPage()\"\n" +
    "                                        ng-disabled=\"!buyButtonEnabled\">{{'ADD_TO_CART' | translate}}</button>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <!-- shipping rates -->\n" +
    "                                <div class=\"col-md-8 col-md-offset-2 shipping-rate\" ng-if=\"!noShippingRates\">\n" +
    "                                    <a href=\"\"><span ng-click=\"showShippingRates()\">Shipping Rates</span></a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "\n" +
    "                       <div class=\"reward-points\" ng-include src=\"'js/app/loyalty/templates/reward_points_product_details.html'\"></div>\n" +
    "\n" +
    "                        <!-- unavialable button -->\n" +
    "                        <div class=\"row\" ng-if=\"!product.prices[0]\">\n" +
    "                            <div class=\"col-md-8 col-md-offset-2\">\n" +
    "                                <button id=\"out-of-stock-btn\" class=\"btn btn-default btn-block buyButton\" disabled>{{'UNAVAILABLE' | translate}}</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!-- out of stock button -->\n" +
    "                        <div class=\"row\" ng-if=\"product.prices[0] && !product.inStock\">\n" +
    "                            <div class=\"col-md-8 col-md-offset-2\">\n" +
    "                                <button id=\"out-of-stock-btn\" class=\"btn btn-default btn-block buyButton\" disabled>{{'OUT_OF_STOCK' | translate}}</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-8 col-md-offset-2\">\n" +
    "            <ul class=\"nav nav-tabs\">\n" +
    "                <li role=\"presentation\" ng-class=\"{active: activeTab === 'description'}\">\n" +
    "                    <a href=\"#\" ng-click=\"openTab('description'); $event.preventDefault();\">{{'DESCRIPTION_TAB' | translate}}</a>\n" +
    "                </li>\n" +
    "\n" +
    "                <li role=\"presentation\" ng-class=\"{active: activeTab === 'details'}\">\n" +
    "                    <a href=\"#\" ng-click=\"openTab('details'); $event.preventDefault();\">{{'DETAILS_TAB' | translate}}</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <section class=\"gray\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-8 col-md-offset-2\">\n" +
    "                <div class=\"tab-content\">\n" +
    "                    <div role=\"tabpanel\" class=\"tab-pane\" ng-class=\"{active: activeTab === 'description'}\" id=\"description\">\n" +
    "                        <!-- product description -->\n" +
    "                        <div class=\"headline\">{{'PRODUCT_DESCRIPTION' | translate}}</div>\n" +
    "\n" +
    "                        <div id=\"product-description-text\" class=\"description\">\n" +
    "                            {{product.description}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div role=\"tabpanel\" class=\"tab-pane\" ng-class=\"{active: activeTab === 'details'}\" id=\"details\">\n" +
    "                        <!-- product detials -->\n" +
    "                        <div class=\"headline\">{{'PRODUCT_DETAILS' | translate}}</div>\n" +
    "\n" +
    "                        <product-extension schema-url=\"{{productMixinsDefinitions[id]}}\" mixin=\"mixin\" ng-repeat=\"(id, mixin) in productMixins track by $index\"></product-extension>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"js/vendor-static/jquery.min.js\"></script>\n" +
    "<script src=\"js/vendor-static/bootstrap.min.js\"></script>\n" +
    "<script src=\"js/vendor-static/owl.carousel.js\"></script>\n" +
    "<script src=\"js/vendor-static/img-touch-canvas.js\"></script>\n" +
    "<script src=\"js/vendor-static/jquery.fullscreen-min.js\"></script>\n" +
    "<script src=\"js/vendor-static/main.js\"></script>"
  );


  $templateCache.put('js/app/products/templates/product-extension-item.html',
    "<div class=\"product-extension-item\">\n" +
    "    <span ng-switch=\"type\">\n" +
    "        <span ng-switch-when=\"array\">\n" +
    "            <ng-include src=\"'js/app/products/templates/product-extension-item/_array.html'\"></ng-include>\n" +
    "        </span>\n" +
    "        <span ng-switch-when=\"object\">\n" +
    "            <ng-include src=\"'js/app/products/templates/product-extension-item/_object.html'\"></ng-include>\n" +
    "        </span>\n" +
    "        <span ng-switch-default>\n" +
    "            <ng-include src=\"'js/app/products/templates/product-extension-item/_default.html'\"></ng-include>\n" +
    "        </span>\n" +
    "    </span>\n" +
    "</div>"
  );


  $templateCache.put('js/app/products/templates/product-extension-item/_array.html',
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-12 array-row\">\n" +
    "		<span ng-if=\"displayedName\">{{displayedName}}</span>\n" +
    "		<strong>\n" +
    "			<span ng-repeat=\"item in value track by $index\" class=\"array-row\" ng-class=\"{'array-row-last':$last}\">\n" +
    "	    		<product-extension-item value=\"item\" definition=\"definition.items\" islastobject=\"$last\" ></product-extension-item>\n" +
    "			</span>\n" +
    "		</strong>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('js/app/products/templates/product-extension-item/_default.html',
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12 displayed-row\">\n" +
    "    \n" +
    "    <span ng-if=\"displayedName\" class=\"displayed-name\">{{displayedName}}</span>\n" +
    "    <span ng-switch=\"type\">\n" +
    "        <strong>\n" +
    "            <span ng-switch-when=\"boolean\">\n" +
    "                <span ng-if=\"value\">Yes</span>\n" +
    "                <span ng-if=\"!value\">No</span>\n" +
    "            </span>\n" +
    "        \n" +
    "            <span ng-switch-when=\"string\">\n" +
    "                <span ng-switch=\"stringFormat\">\n" +
    "                    <span ng-switch-when=\"date\">{{value | defaultDate}}</span>\n" +
    "                    <span ng-switch-when=\"time\">{{value | defaultTime}}</span>\n" +
    "                    <span ng-switch-when=\"date-time\">{{value | defaultDateTime}}</span>\n" +
    "        \n" +
    "                    <span ng-switch-default>{{value}}</span>\n" +
    "                </span>\n" +
    "            </span>\n" +
    "        \n" +
    "            <span ng-switch-default>\n" +
    "                {{value}}\n" +
    "            </span>\n" +
    "        </strong>  \n" +
    "    </span>\n" +
    "</div>\n" +
    "    \n" +
    "</div>"
  );


  $templateCache.put('js/app/products/templates/product-extension-item/_object.html',
    "<div class=\"col-md-12 object-row\" ng-class=\"{'object-row-last':islastobject}\">\n" +
    "	<span ng-if=\"displayedName\"><h4>{{displayedName}} </h4></span>\n" +
    "	<product-extension-item ng-repeat=\"name in propertyOrder\" name=\"{{name}}\" value=\"value[name]\" definition=\"definition.properties[name]\"></product-extension-item>\n" +
    "</div>"
  );


  $templateCache.put('js/app/products/templates/product-extension.html',
    "<product-extension-item name=\"{{name}}\" value=\"mixin\" definition=\"definition\" ng-if=\"definition\"></product-extension-item>"
  );


  $templateCache.put('js/app/products/templates/product-img-carousel.html',
    "<div class=\"row image-carousel\">\n" +
    "    <div class=\"col-md-10 main-image-container\" ng-click=\"enlargeImage()\">\n" +
    "        <div class=\"product-images\">   \n" +
    "            <img id=\"{{$index}}\" class=\"product-image\" ng-repeat=\"image in images\" ng-src=\"{{image.url}}\" alt=\"\" fullscreen>        \n" +
    "        </div>\n" +
    "        <div class=\"zoom\">\n" +
    "            <span class=\"hidden-xs hidden-sm\"><img src=\"img/img-zoom.png\" alt=\"Zoom\"/></span>\n" +
    "        </div>\n" +
    "        <div class=\"hidden-lg hidden-md mobileThumbs\">\n" +
    "            <div ng-repeat=\"thumb in images\" ng-class=\"{'active': currentIndex === $index}\" ng-click=\"moveCarousel($index)\">\n" +
    "                <span></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-2 hidden-xs hidden-sm\">\n" +
    "        <div class=\"thumbnails\">\n" +
    "            <a ng-repeat=\"thumb in images\">\n" +
    "                <img class=\"\" ng-class=\"{'active': currentIndex === $index}\" ng-src=\"{{thumb.url}}\" alt=\"\" ng-click=\"moveCarousel($index)\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/products/templates/product-list.html',
    "<!-- directive: force-scroll -->\n" +
    "<div ng-cloak>\n" +
    "\n" +
    "    <!-- hero spot -->\n" +
    "    <div class=\"hero-unit\" ng-if=\"mainCategoryImage\">\n" +
    "        <blockquote ng-style=\"{ 'background-image': 'url(\\'{{mainCategoryImage.url}}\\' )','background-position':'0 0'}\">\n" +
    "            <p>{{store.name}}</p>\n" +
    "        </blockquote>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- refinement section -->\n" +
    "    <div class=\"refine-section\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"content-container\">\n" +
    "\n" +
    "                <div class=\"clearfix visible-sm\"></div>\n" +
    "\n" +
    "                <!-- sort control -->\n" +
    "                <div class=\"col-xs-7 col-sm-6 col-md-4 col-lg-3\">\n" +
    "                    <div class=\"sortContainer product-list-sort\">\n" +
    "                        <div class=\"name pull-left\">{{'SORT_BY' | translate}}:</div>\n" +
    "                        <div class=\"form-group pull-left\">\n" +
    "                            <label for=\"\" class=\"sr-only\">{{'SORT_BY' | translate}}:</label>\n" +
    "\n" +
    "                            <div class=\"custom-select-container\">\n" +
    "                                <ui-select ng-model=\"sort.selected\" on-select=\"setSortedPage($item.id)\">\n" +
    "                                    <ui-select-match>\n" +
    "                                        {{$select.selected.name}}\n" +
    "                                    </ui-select-match>\n" +
    "                                    <ui-select-choices repeat=\"item.id as item in (sortParams | filter: $select.search)\">\n" +
    "                                        <span ng-bind=\"item.name\"></span>\n" +
    "                                    </ui-select-choices>\n" +
    "                                </ui-select>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- pagination control -->\n" +
    "                <div class=\"col-xs-5 col-sm-6 col-md-6 col-lg-3 pull-right\">\n" +
    "                    <div class=\"viewingContainer\">\n" +
    "                        <span class=\"name\">{{'VIEWING' | translate}}</span>\n" +
    "                        <span id=\"product-range-indicator\" class=\"page-indicator\"\n" +
    "                             translate=\"PRODUCTS_FROM_TO\"\n" +
    "                             translate-compile\n" +
    "                             translate-values=\"{productsFrom: '{{pagination.productsFrom}}', productsTo: '{{pagination.productsTo}}', total: '{{total}}'}\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- bread crumbs -->\n" +
    "    <ybreadcrumb yitem=\"category\" size=\"large\"></ybreadcrumb>\n" +
    "\n" +
    "    <section class=\"white\">\n" +
    "\n" +
    "        <!-- page title -->\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 text-center\">\n" +
    "                <h1 class=\"pageTitle productListTitle\"><span ng-if=\"category.name\">{{ category.name }}</span><span ng-if=\"!category.name\">{{ 'ALL_PRODUCTS' | translate }}</span></h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- sticky refinements bar -->\n" +
    "        <div id=\"refineAffix\" class=\"refine-section responsive-fixed\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"content-container\">\n" +
    "                    <div class=\"clearfix visible-sm\"></div>\n" +
    "\n" +
    "                    <!-- sort control -->\n" +
    "                    <div class=\"col-xs-7 col-sm-6 col-md-4 col-lg-2\">\n" +
    "                        <div class=\"sortContainer product-list-sort\">\n" +
    "                            <div class=\"name pull-left\">{{'SORT_BY' | translate}}:</div>\n" +
    "                            <div class=\"form-group pull-left\">\n" +
    "                                <label for=\"\" class=\"sr-only\">{{'SORT_BY' | translate}}:</label>\n" +
    "\n" +
    "                                <div>\n" +
    "                                    <span class=\"custom-select-container\">\n" +
    "                                        <ui-select ng-model=\"sort.selected\" on-select=\"setSortedPage($item.id)\">\n" +
    "                                            <ui-select-match>\n" +
    "                                                {{$select.selected.name}}\n" +
    "                                            </ui-select-match>\n" +
    "                                            <ui-select-choices repeat=\"item.id as item in (sortParams | filter: $select.search)\">\n" +
    "                                                <span ng-bind=\"item.name\"></span>\n" +
    "                                            </ui-select-choices>\n" +
    "                                        </ui-select>\n" +
    "                                    </span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <!-- pagination control -->\n" +
    "                    <div class=\"col-xs-5 col-sm-6 col-md-6 col-lg-3 pull-right\">\n" +
    "                        <div class=\"viewingContainer\">\n" +
    "                            <div class=\"name\">{{'VIEWING' | translate}}</div>\n" +
    "                            <div class=\"page-indicator\" translate=\"PRODUCTS_FROM_TO\" translate-compile\n" +
    "                                 translate-values=\"{productsFrom: '{{pagination.productsFrom}}', productsTo: '{{pagination.productsTo}}', total: '{{total}}'}\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Note:  infinite-scroll directive must not be combined with ng-repeat:  http://binarymuse.github.io/ngInfiniteScroll/faq.html  -->\n" +
    "\n" +
    "        <div class=\"row product-grid\" infinite-scroll=\"addMore()\" infinite-scroll-distance=\"0\"\n" +
    "         infinite-scroll-immediate-check=\"false\"\n" +
    "         infinite-scroll-data=\"pagination\" ng-cloak\n" +
    "         infinite-scroll-visible-items>\n" +
    "        <div class=\"item col-xs-12 col-sm-6 col-md-4 col-lg-3\" ng-repeat=\"product in products\"\n" +
    "             on-finish-render-ng-repeat on-finish-render-ng-repeat-event=\"initialViewportCheck\">\n" +
    "\n" +
    "            <a id=\"p_{{product.id}}\" ng-click=\"openProductDetails(product.id)\" ui-sref=\"base.product.detail( {productId: product.id, lastCatId: lastCatId} )\">\n" +
    "                <div class=\"productContainer\">\n" +
    "                    <div class=\"thumb\">\n" +
    "                        <img ng-src=\"{{ product && product.mainImageURL || PLACEHOLDER_IMAGE}}\" alt=\"\">\n" +
    "                    </div>\n" +
    "                    <div class=\"productInfoContainer text-center\">\n" +
    "                        <div class=\"name\">{{ product.name }}</div>\n" +
    "                        <div ng-if=\"product.hasVariants\">\n" +
    "                            <div ng-if=\"prices[product.id].minPrice\">\n" +
    "                                <div ng-if=\"prices[product.id].minPrice.effectiveAmount == prices[product.id].maxPrice.effectiveAmount\">\n" +
    "                                    <div ng-if=\"prices[product.id].minPrice.effectiveAmount < prices[product.id].minPrice.originalAmount\" class=\"price\">\n" +
    "                                        <span class=\"originalPrice\"><strike>{{prices[product.id].minPrice.originalAmount | currency: '' }}</strike></span>\n" +
    "                                        <span class=\"price salesPrice\">{{prices[product.id].minPrice.effectiveAmount | currency: ''}}</span>\n" +
    "                                        <span> {{currencySymbol}}</span>\n" +
    "                                        <span class=\"priceUnit\" ng-if=\"prices[product.id].minPrice.measurementUnit\">{{prices[product.id].minPrice.measurementUnit.quantity}} {{prices[product.id].minPrice.measurementUnit.unitCode}}</span>\n" +
    "                                    </div>\n" +
    "                                    <div ng-if=\"prices[product.id].minPrice.effectiveAmount == prices[product.id].minPrice.originalAmount\" class=\"price\">\n" +
    "                                        <span>{{prices[product.id].minPrice.effectiveAmount | currency: ''}} {{currencySymbol}}</span>\n" +
    "                                        <span class=\"priceUnit\" ng-if=\"prices[product.id].minPrice.measurementUnit\">{{prices[product.id].minPrice.measurementUnit.quantity}} {{prices[product.id].minPrice.measurementUnit.unitCode}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-if=\"prices[product.id].minPrice.effectiveAmount != prices[product.id].maxPrice.effectiveAmount\">\n" +
    "                                    <div>\n" +
    "                                        <span ng-if=\"prices[product.id].minPrice.effectiveAmount < prices[product.id].minPrice.originalAmount\" class=\"price\">\n" +
    "                                            <span class=\"originalPrice\"><strike>{{ prices[product.id].minPrice.originalAmount | currency: '' }}</strike></span>\n" +
    "                                            <span class=\"price salesPrice\">{{prices[product.id].minPrice.effectiveAmount | currency: ''}}</span>\n" +
    "                                        </span>\n" +
    "                                        <span ng-if=\"prices[product.id].minPrice.effectiveAmount == prices[product.id].minPrice.originalAmount\" class=\"price\">\n" +
    "                                            <span>{{prices[product.id].minPrice.effectiveAmount | currency: ''}}</span>\n" +
    "                                        </span>\n" +
    "                                        <span class=\"price\">-</span>\n" +
    "                                        <span ng-if=\"prices[product.id].maxPrice.effectiveAmount < prices[product.id].maxPrice.originalAmount\" class=\"price\">\n" +
    "                                            <span class=\"originalPrice\"><strike>{{ prices[product.id].maxPrice.originalAmount | currency: '' }}</strike></span>\n" +
    "                                            <span class=\"price salesPrice\">{{prices[product.id].maxPrice.effectiveAmount | currency: ''}}</span>\n" +
    "                                            <span> {{currencySymbol}}</span>\n" +
    "                                            <span class=\"priceUnit\" ng-if=\"prices[product.id].maxPrice.measurementUnit\">{{prices[product.id].maxPrice.measurementUnit.quantity}} {{prices[product.id].maxPrice.measurementUnit.unitCode}}</span>\n" +
    "                                        </span>\n" +
    "                                        <span ng-if=\"prices[product.id].maxPrice.effectiveAmount == prices[product.id].maxPrice.originalAmount\" class=\"price\">\n" +
    "                                            <span class=\"price\">{{prices[product.id].maxPrice.effectiveAmount | currency: ''}} {{currencySymbol}}</span>\n" +
    "                                            <span class=\"priceUnit\" ng-if=\"prices[product.id].maxPrice.measurementUnit\">{{prices[product.id].maxPrice.measurementUnit.quantity}} {{prices[product.id].maxPrice.measurementUnit.unitCode}}</span>\n" +
    "                                        </span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-if=\"!prices[product.id].minPrice\">\n" +
    "                                <span class=\"price\">{{'NO_PRICE' | translate}} {{currencySymbol}}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"!product.hasVariants\">\n" +
    "                            <div ng-if=\"prices[product.id]\">\n" +
    "                                <div ng-if=\"prices[product.id].singlePrice.effectiveAmount < prices[product.id].singlePrice.originalAmount\" class=\"price\">\n" +
    "                                    <span class=\"originalPrice\"><strike>{{ prices[product.id].singlePrice.originalAmount | currency: '' }}</strike></span>\n" +
    "                                    <span class=\"price salesPrice\">{{prices[product.id].singlePrice.effectiveAmount | currency: ''}}</span>\n" +
    "                                    <span> {{currencySymbol}}</span>\n" +
    "                                    <span class=\"priceUnit\" ng-if=\"prices[product.id].singlePrice.measurementUnit\">{{prices[product.id].singlePrice.measurementUnit.quantity}} {{prices[product.id].singlePrice.measurementUnit.unitCode}}</span>\n" +
    "                                </div>\n" +
    "                                <div ng-if=\"prices[product.id].singlePrice.effectiveAmount == prices[product.id].singlePrice.originalAmount\" class=\"price\">\n" +
    "                                    <span>{{prices[product.id].singlePrice.effectiveAmount | currency: ''}} {{currencySymbol}}</span>\n" +
    "                                    <span class=\"priceUnit\" ng-if=\"prices[product.id].singlePrice.measurementUnit\">{{prices[product.id].singlePrice.measurementUnit.quantity}} {{prices[product.id].singlePrice.measurementUnit.unitCode}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-if=\"!prices[product.id]\">\n" +
    "                                <span class=\"price\">{{'NO_PRICE' | translate}} {{currencySymbol}}</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- back to top button -->\n" +
    "        <button type=\"button\" id=\"to-top-btn\" ng-click=\"backToTop()\" class=\"btn btn-link back-to-top-button pull-left menu\">\n" +
    "            <span class=\"hyicon hyicon-chevron-bold-up\" />\n" +
    "        </button>\n" +
    "\n" +
    "    </section>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"js/vendor-static/img-touch-canvas.js\"></script>\n" +
    "<script src=\"js/vendor-static/jquery.fullscreen-min.js\"></script>\n" +
    "<script src=\"js/vendor-static/main.js\"></script>\n"
  );


  $templateCache.put('js/app/products/templates/product-options/product-options.html',
    "<div ng-repeat=\"option in options\">\n" +
    "    <div class=\"row product-options\">\n" +
    "        <div class=\"col-md-8 col-md-offset-2 custom-select-container\">\n" +
    "            <div class=\"form-group input-group\">\n" +
    "                <label class=\"input-group-addon control-label\">{{option.attributeKey}}</label>\n" +
    "                <ui-select ng-model=\"optionsSelected[$index]\" on-select=\"resolveActiveVariantAndUpdateOptions()\">\n" +
    "                    <ui-select-match ng-click=\"omitSelectionAndUpdateOptions($index)\" placeholder=\"{{'SELECT' | translate}}\" allow-clear=\"true\">\n" +
    "                        {{$select.selected.value}}\n" +
    "                    </ui-select-match>\n" +
    "                    <ui-select-choices repeat=\"attribute in option.attributes\" ui-disable-choice=\"attribute.disabled\">\n" +
    "                        <span>{{attribute.value}}</span>\n" +
    "                        <span class=\"text-uppercase\" ng-if=\"attribute.disabled\">- {{'UNAVAILABLE' | translate}}</span>\n" +
    "                    </ui-select-choices>\n" +
    "                </ui-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br/>\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/search/templates/search-list.html',
    "<!-- directive: force-scroll -->\n" +
    "<div ng-cloak>\n" +
    "\n" +
    "    <div ng-if=\"total === 0\">\n" +
    "        <div class=\"refine-section\" ng-cloak>\n" +
    "            <div class=\"row\">\n" +
    "                <div ng-if=\"!category.name\" class=\"col-xs-12 col-sm-6  title\">{{total}} {{ 'RESULTS' | translate }}</div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"text-center\">\n" +
    "                    <div translate=\"FOUND_FOR\" translate-compile translate-values=\"{total: '{{total}}', searchString: '{{searchString}}'}\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row continueShoppingBtn\">\n" +
    "                <a ui-sref=\"base.category\" class=\"btn btn-primary btn-large btn-block\">{{'CONTINUE_SHOPPING' | translate}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"total > 0\">\n" +
    "\n" +
    "        <!-- refinement section -->\n" +
    "        <div class=\"refine-section\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"content-container\">\n" +
    "                    <div class=\"clearfix visible-sm\"></div>\n" +
    "\n" +
    "                    <!-- sort control -->\n" +
    "                    <div class=\"col-xs-7 col-sm-6 col-md-4 col-lg-3\">\n" +
    "                        <div class=\"sortContainer search-list-sort\">\n" +
    "                            <div class=\"name pull-left\">{{'SORT_BY' | translate}}:</div>\n" +
    "                            <div class=\"form-group pull-left\">\n" +
    "                                <label for=\"\" class=\"sr-only\">{{'SORT_BY' | translate}}:</label>\n" +
    "\n" +
    "                                <div class=\"custom-select-container\">\n" +
    "                                    <ui-select ng-model=\"sort.selected\" on-select=\"setSortedPage($item.id)\">\n" +
    "                                        <ui-select-match>\n" +
    "                                            {{$select.selected.name}}\n" +
    "                                        </ui-select-match>\n" +
    "                                        <ui-select-choices repeat=\"item.id as item in (sortParams | filter: $select.search)\">\n" +
    "                                            <span ng-bind=\"item.name\"></span>\n" +
    "                                        </ui-select-choices>\n" +
    "                                    </ui-select>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <!-- pagination control -->\n" +
    "                    <div class=\"col-xs-5 col-sm-6 col-md-6 col-lg-3 pull-right\">\n" +
    "                        <div class=\"viewingContainer\">\n" +
    "                            <span class=\"name\">{{'VIEWING' | translate}}</span>\n" +
    "                            <span class=\"page-indicator\"\n" +
    "                                  translate=\"PRODUCTS_FROM_TO\"\n" +
    "                                  translate-compile\n" +
    "                                  translate-values=\"{productsFrom: '{{pagination.productsFrom}}', productsTo: '{{pagination.productsTo}}', total: '{{total}}'}\"></span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- bread crumbs -->\n" +
    "        <ybreadcrumb yitem=\"category\" size=\"'large'\"></ybreadcrumb>\n" +
    "\n" +
    "        <section class=\"white\">\n" +
    "\n" +
    "            <!-- page title -->\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12 text-center\">\n" +
    "                    <h1 class=\"pageTitle productListTitle\"><span translate=\"FOUND_FOR\" translate-values=\"{total: total, searchString: searchString}\"></span></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- sticky refinements bar -->\n" +
    "            <div id=\"refineAffix\" class=\"refine-section responsive-fixed\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"content-container\">\n" +
    "                        <div class=\"clearfix visible-sm\"></div>\n" +
    "\n" +
    "                        <!-- sort control -->\n" +
    "                        <div class=\"col-xs-7 col-sm-6 col-md-4 col-lg-3\">\n" +
    "                            <div class=\"sortContainer search-list-sort\">\n" +
    "                                <div class=\"name pull-left\">{{'SORT_BY' | translate}}:</div>\n" +
    "                                <div class=\"form-group pull-left\">\n" +
    "                                    <label for=\"\" class=\"sr-only\">{{'SORT_BY' | translate}}:</label>\n" +
    "\n" +
    "                                    <div class=\"custom-select-container\">\n" +
    "                                        <ui-select ng-model=\"sort.selected\" on-select=\"setSortedPage($item.id)\">\n" +
    "                                            <ui-select-match>\n" +
    "                                                {{$select.selected.name}}\n" +
    "                                            </ui-select-match>\n" +
    "                                            <ui-select-choices repeat=\"item.id as item in (sortParams | filter: $select.search)\">\n" +
    "                                                <span ng-bind=\"item.name\"></span>\n" +
    "                                            </ui-select-choices>\n" +
    "                                        </ui-select>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!-- pagination control -->\n" +
    "                        <div class=\"col-xs-5 col-sm-6 col-md-6 col-lg-3 pull-right\">\n" +
    "                            <div class=\"viewingContainer\">\n" +
    "                                <span class=\"name\">{{'VIEWING' | translate}}</span>\n" +
    "                                <span class=\"page-indicator\"\n" +
    "                                      translate=\"PRODUCTS_FROM_TO\"\n" +
    "                                      translate-compile\n" +
    "                                      translate-values=\"{productsFrom: '{{pagination.productsFrom}}', productsTo: '{{pagination.productsTo}}', total: '{{total}}'}\"></span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row product-grid\" infinite-scroll=\"addMore()\" infinite-scroll-distance=\"0\"\n" +
    "                 infinite-scroll-immediate-check=\"false\"\n" +
    "                 infinite-scroll-data=\"pagination\" ng-cloak\n" +
    "                 infinite-scroll-visible-items>\n" +
    "                <div class=\"item col-xs-12 col-sm-6 col-md-4 col-lg-3\" ng-repeat=\"product in products\"\n" +
    "                     on-finish-render-ng-repeat on-finish-render-ng-repeat-event=\"initialViewportCheck\">\n" +
    "                    \n" +
    "                    <a id=\"p_{{product.id}}\" ng-click=\"openProductDetails(product.id)\" ui-sref=\"base.product.detail( {productId: product.id, lastCatId: lastCatId} )\">\n" +
    "                        <div class=\"productContainer\">\n" +
    "                            <div class=\"thumb\">\n" +
    "                                <img ng-src=\"{{ product && product.mainImageURL || PLACEHOLDER_IMAGE}}\" alt=\"\">\n" +
    "                            </div>\n" +
    "                            <div class=\"productInfoContainer text-center\">\n" +
    "                                <div class=\"name\">{{ product.name }}</div>\n" +
    "                                <div ng-if=\"product.hasVariants\">\n" +
    "                                    <div ng-if=\"prices[product.id].minPrice\">\n" +
    "                                        <div ng-if=\"prices[product.id].minPrice.effectiveAmount == prices[product.id].maxPrice.effectiveAmount\">\n" +
    "                                            <div ng-if=\"prices[product.id].minPrice.effectiveAmount < prices[product.id].minPrice.originalAmount\" class=\"price\">\n" +
    "                                                <span class=\"originalPrice\"><strike>{{prices[product.id].minPrice.originalAmount | currency: '' }}</strike></span>\n" +
    "                                                <span class=\"price salesPrice\">{{prices[product.id].minPrice.effectiveAmount | currency: ''}}</span>\n" +
    "                                                <span> {{currencySymbol}}</span>\n" +
    "                                                <span class=\"priceUnit\" ng-if=\"prices[product.id].minPrice.measurementUnit\">{{prices[product.id].minPrice.measurementUnit.quantity}} {{prices[product.id].minPrice.measurementUnit.unitCode}}</span>\n" +
    "                                            </div>\n" +
    "                                            <div ng-if=\"prices[product.id].minPrice.effectiveAmount == prices[product.id].minPrice.originalAmount\" class=\"price\">\n" +
    "                                                <span>{{prices[product.id].minPrice.effectiveAmount | currency: ''}} {{currencySymbol}}</span>\n" +
    "                                                <span class=\"priceUnit\" ng-if=\"prices[product.id].minPrice.measurementUnit\">{{prices[product.id].minPrice.measurementUnit.quantity}} {{prices[product.id].minPrice.measurementUnit.unitCode}}</span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div ng-if=\"prices[product.id].minPrice.effectiveAmount != prices[product.id].maxPrice.effectiveAmount\">\n" +
    "                                            <div>\n" +
    "                                                <span ng-if=\"prices[product.id].minPrice.effectiveAmount < prices[product.id].minPrice.originalAmount\" class=\"price\">\n" +
    "                                                    <span class=\"originalPrice\"><strike>{{ prices[product.id].minPrice.originalAmount | currency: '' }}</strike></span>\n" +
    "                                                    <span class=\"price salesPrice\">{{prices[product.id].minPrice.effectiveAmount | currency: ''}}</span>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"prices[product.id].minPrice.effectiveAmount == prices[product.id].minPrice.originalAmount\" class=\"price\">\n" +
    "                                                    <span>{{prices[product.id].minPrice.effectiveAmount | currency: ''}}</span>\n" +
    "                                                </span>\n" +
    "                                                <span class=\"price\">-</span>\n" +
    "                                                <span ng-if=\"prices[product.id].maxPrice.effectiveAmount < prices[product.id].maxPrice.originalAmount\" class=\"price\">\n" +
    "                                                    <span class=\"originalPrice\"><strike>{{ prices[product.id].maxPrice.originalAmount | currency: '' }}</strike></span>\n" +
    "                                                    <span class=\"price salesPrice\">{{prices[product.id].maxPrice.effectiveAmount | currency: ''}}</span>\n" +
    "                                                    <span> {{currencySymbol}}</span>\n" +
    "                                                    <span class=\"priceUnit\" ng-if=\"prices[product.id].maxPrice.measurementUnit\">{{prices[product.id].maxPrice.measurementUnit.quantity}} {{prices[product.id].maxPrice.measurementUnit.unitCode}}</span>\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"prices[product.id].maxPrice.effectiveAmount == prices[product.id].maxPrice.originalAmount\" class=\"price\">\n" +
    "                                                    <span>{{prices[product.id].maxPrice.effectiveAmount | currency: ''}} {{currencySymbol}}</span>\n" +
    "                                                    <span class=\"priceUnit\" ng-if=\"prices[product.id].maxPrice.measurementUnit\">{{prices[product.id].maxPrice.measurementUnit.quantity}} {{prices[product.id].maxPrice.measurementUnit.unitCode}}</span>\n" +
    "                                                </span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div ng-if=\"!prices[product.id].minPrice\">\n" +
    "                                        <span class=\"price\">{{'NO_PRICE' | translate}} {{currencySymbol}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div ng-if=\"!product.hasVariants\">\n" +
    "                                    <div ng-if=\"prices[product.id]\">\n" +
    "                                        <div ng-if=\"prices[product.id].singlePrice.effectiveAmount < prices[product.id].singlePrice.originalAmount\" class=\"price\">\n" +
    "                                            <span class=\"price originalPrice\"><strike>{{ prices[product.id].singlePrice.originalAmount | currency: '' }}</strike></span>\n" +
    "                                            <span class=\"price salesPrice\">{{prices[product.id].singlePrice.effectiveAmount | currency: ''}}</span>\n" +
    "                                            <span> {{currencySymbol}}</span>\n" +
    "                                            <span class=\"priceUnit\" ng-if=\"prices[product.id].singlePrice.measurementUnit\">{{prices[product.id].singlePrice.measurementUnit.quantity}} {{prices[product.id].singlePrice.measurementUnit.unitCode}}</span>\n" +
    "                                        </div>\n" +
    "                                        <div ng-if=\"prices[product.id].singlePrice.effectiveAmount == prices[product.id].singlePrice.originalAmount\" class=\"price\">\n" +
    "                                            <span class=\"price\">{{prices[product.id].singlePrice.effectiveAmount | currency: ''}} {{currencySymbol}}</span>\n" +
    "                                            <span class=\"priceUnit\" ng-if=\"prices[product.id].singlePrice.measurementUnit\">{{prices[product.id].singlePrice.measurementUnit.quantity}} {{prices[product.id].singlePrice.measurementUnit.unitCode}}</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div ng-if=\"!prices[product.id]\">\n" +
    "                                        <span class=\"price\">{{'NO_PRICE' | translate}} {{currencySymbol}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <button type=\"button\" id=\"to-top-btn\" ng-click=\"backToTop()\" class=\"btn btn-link back-to-top-button pull-left menu\">\n" +
    "                <span class=\"hyicon hyicon-chevron-bold-up\" />\n" +
    "            </button>\n" +
    "        </section>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<script src=\"js/vendor-static/img-touch-canvas.js\"></script>\n" +
    "<script src=\"js/vendor-static/jquery.fullscreen-min.js\"></script>\n" +
    "<script src=\"js/vendor-static/main.js\"></script>\n"
  );


  $templateCache.put('js/app/shared/directives/site-selector/site-selector.html',
    "<div class=\"regionControls text-center\">\n" +
    "    <div class=\"controlcontainer\">\n" +
    "        <div class=\"dropdown\" ng-hide=\"sites.length == 1 && sites[0].languages.length == 1\">\n" +
    "            <a class=\" dropdown-toggle siteSelectorIcon\"\n" +
    "               ng-click=\"setHoveredSite(selectedSite)\">\n" +
    "                <img class=\"site-selector-icon\"\n" +
    "                     ng-src=\"{{GlobalData.store.icon || 'img/ico_default.png'}}\" />\n" +
    "            </a>\n" +
    "            <div class=\"dropdown-menu regionMenu\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "                        <ul class=\"list-unstyled regionControlList\">\n" +
    "                            <li ng-repeat=\"site in sites\" ng-class=\"{ 'selected':site.code === selectedSite.code, 'hovered': site.code === hoveredSite.code}\"\n" +
    "                                ng-click=\"selectSiteAndLanguage(site, site.defaultLanguage)\"\n" +
    "                                ng-mouseover=\"setHoveredSite(site)\">{{site.name}}</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "                        <ul id=\"region-list\" class=\"list-unstyled regionControlList\">\n" +
    "                            <li ng-repeat=\"lang in hoveredSite.languages\" ng-click=\"selectSiteAndLanguage(hoveredSite, lang)\"\n" +
    "                                ng-class=\"{ 'selected':(lang === selectedLanguage() && hoveredSite.code === selectedSite.code),\n" +
    "                                                   'defaultLang': (lang === hoveredSite.defaultLanguage && hoveredSite.code !== selectedSite.code)  }\">\n" +
    "                                {{lang | translate}}\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/shared/templates/footer.html',
    "<div class=\"pageFooter\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 col-lg-6 socialIcons text-center\">\n" +
    "            <a href=\"https://www.facebook.com/hybrissoftware\"><span class=\"hyicon hyicon-social-facebook\"></span></a>\n" +
    "            <a href=\"https://twitter.com/hybris_software\"><span class=\"hyicon hyicon-social-twitter\"></span></a>\n" +
    "            <a href=\"https://www.pinterest.com/cspieker/hybris/\"><span class=\"hyicon hyicon-social-pinterest\"></span></a>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 col-lg-6 links text-center\">\n" +
    "\n" +
    "            <a href=\"#\">&copy; hybris YaaS</a>\n" +
    "            <span class=\"hidden\">\n" +
    "                /\n" +
    "                <a href=\"#\">{{'TERMS_AND_CONDITIONS' | translate}}</a>\n" +
    "                /\n" +
    "                <a href=\"#\">{{'CONTACT_US' | translate}}</a>\n" +
    "                /\n" +
    "                <a href=\"#\">{{'SITE_MAP' | translate}}</a>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/app/shared/templates/shipping-dialog.html',
    "<div class=\"modal-header shippingZoneModalHeader\" ng-cloak>\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"closeShippingZonesDialog()\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">{{'CLOSE' | translate}}</span></button>\n" +
    "  <h4 class=\"modal-title\" id=\"myModalLabel\">{{'SHIPPING_INFORMATION' | translate}}</h4>\n" +
    "</div>\n" +
    "<div class=\"shippingZoneModal modal-body\">\n" +
    "  <div class=\"row\">\n" +
    "    <div ng-if=\"zone.methods.length\" class=\"zoneparent col-xs-12\" ng-repeat=\"zone in shippingZones\">\n" +
    "        <div class=\"zonetitle\">\n" +
    "            <p class=\"label\">{{zone.name}}\n" +
    "            <p>{{'DESTINATION_COUNTRY' | translate}} - <span>{{zone.shipTo.join(', ')}}</span></p>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 zoneinfo\">\n" +
    "            <div class=\"row\" ng-repeat=\"method in zone.methods\">\n" +
    "                <div class=\"rangeCol col-xs-7\">\n" +
    "                    <p class=\"label\">{{method.name}}\n" +
    "                    <p ng-if=\"!$last\" ng-repeat=\"fee in method.fees\">{{fee.minOrderValue.amount}} - {{method.fees[$index + 1].minOrderValue.amount}} {{fee.cost.currency}}</p>\n" +
    "                    <p ng-if=\"$last\" ng-repeat=\"fee in method.fees\">{{fee.minOrderValue.amount}} - {{'NO_LIMIT' | translate}}</p>                \n" +
    "                </div>\n" +
    "                <div class=\"col-xs-5 text-right\">\n" +
    "                    <p class=\"title\">{{'SHIPPING_RATE' | translate}}</p>\n" +
    "                    <p ng-repeat=\"fee in method.fees\">{{fee.cost.amount}} {{fee.cost.currency}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/shared/templates/sidebar-navigation.html',
    "<ysearch></ysearch>\n" +
    "<div ng-cloak id=\"menu\">\n" +
    "    <ul class=\"navi\">\n" +
    "        <li ng-repeat=\"category in categories\" > <!-- class=\"has-sub\" -->\n" +
    "            <a ui-sref=\"base.category( {catName: category.slug} )\" class=\"mainCategory categoryLevel\" ng-click=\"hideMobileNav()\">\n" +
    "                {{ category.name  }}\n" +
    "            </a>\n" +
    "            <label for=\"secondarycategory{{$index}}\" class=\"toggle-sub\" onclick=\"\" ng-if=\"category.subcategories\">\n" +
    "                <span class=\"hyicon hyicon-chevron-thin-right\"></span>\n" +
    "            </label>\n" +
    "            <input type=\"checkbox\" id=\"secondarycategory{{$index}}\" class=\"sub-nav-check\" ng-if=\"category.subcategories\">\n" +
    "            <ul id=\"secondarycategory{{$index}}-sub\" class=\"sub-nav\" ng-if=\"category.subcategories\">\n" +
    "                <li class=\"sub-heading\">\n" +
    "                    <label for=\"secondarycategory{{$index}}\" class=\"toggle\" onclick=\"\" title=\"{{'BACK' | translate}}\"><span class=\"hyicon hyicon-chevron-thin-left\"></span></label>\n" +
    "                    {{category.name}}\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"sub2 in category.subcategories\" >\n" +
    "                    <a data-ui-sref=\"base.category( {catName: sub2.slug} )\" class=\"secondaryCategory categoryLevel\" ng-class=\"{'noSubCategories': sub2.subcategories == undefined}\" ng-click=\"hideMobileNav()\">\n" +
    "                        {{sub2.name }}\n" +
    "                    </a>\n" +
    "                    <label for=\"tertiarycategory{{$index}}\" class=\"toggle-sub\" onclick=\"\" ng-if=\"sub2.subcategories\">\n" +
    "                        <span class=\"hyicon hyicon-chevron-thin-right\"></span>\n" +
    "                    </label>\n" +
    "                    <input type=\"checkbox\" id=\"tertiarycategory{{$index}}\" class=\"sub-nav-check\" ng-if=\"sub2.subcategories\">\n" +
    "                    <ul class=\"sub-nav\" id=\"tertiarycategory{{$index}}-sub\">\n" +
    "                        <li class=\"sub-heading\">\n" +
    "                            <label for=\"tertiarycategory{{$index}}\" class=\"toggle\" onclick=\"\" title=\"{{'BACK' | translate}}\"><span class=\"hyicon hyicon-chevron-thin-left\"></span></label>\n" +
    "                            {{sub2.name}}\n" +
    "                        </li>\n" +
    "                        <!-- more NG loops would happen here -->\n" +
    "                        <li ng-repeat=\"sub3 in sub2.subcategories\">\n" +
    "                            <a class=\"tertiaryLevel categoryLevel\" ui-sref=\"base.category( {catName: sub3.slug} )\" ng-click=\"hideMobileNav()\">{{ sub3.name }}</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"authentication-cnt\">\n" +
    "    <div ng-if=\"user.isAuthenticated\" >\n" +
    "        <div class=\"signinContainer\">\n" +
    "            <div class=\"col-xs-3 text-right\">\n" +
    "                <a><img ng-src=\"{{user.image}}\" class=\"user-avatar socialAvatar\" ng-click=\"myAccount()\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-9 my-account-link\">\n" +
    "                <a href=\"\" class=\"my-profile\" ng-click=\"myAccount()\" title=\"{{'MY_ACCOUNT' | translate}}\">\n" +
    "                    {{'MY_ACCOUNT' | translate}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-offset-3 col-xs-9 logout-link text-left\">\n" +
    "                <a ng-click=\"logout()\" class=\"signout\">{{'SIGN_OUT' | translate}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"!user.isAuthenticated\">\n" +
    "        <div class=\"signinContainer signinContainer-sidebar\">\n" +
    "            <div class=\"my-account-link\">\n" +
    "                <a class=\"btn btn-link navbar-btn signin\" ng-click=\"login({windowClass:'mobileLoginModal'})\">\n" +
    "                    {{'SIGN_IN' | translate}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"dropdown \">\n" +
    "            <a data-toggle=\"dropdown\" href=\"#\" class=\"btn btn-link navbar-btn signin pull-right\" ng-if=\"user.isAuthenticated\" >\n" +
    "                <img src=\"./img/user-icon_small_active.png\" class=\"user-avatar loggedin\">\n" +
    "            </a>\n" +
    "            <ul class=\"dropdown-menu\" class=\"pull-right\">\n" +
    "                <li><a href=\"\" class=\"logout\" ng-click=\"logout()\">{{'SIGN_OUT' | translate}}</a></li>\n" +
    "                <li class=\"divider\"></li>\n" +
    "                <li><a href=\"\" class=\"my-profile\" ng-click=\"myAccount()\">{{'MY_ACCOUNT' | translate}}</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "        \n" +
    "\n"
  );


  $templateCache.put('js/app/shared/templates/top-navigation.html',
    "<!-- mobile navigation only -->\n" +
    "<div class=\"mobileNav hidden-lg hidden-md visible-sm visible-xs\">\n" +
    "    <nav class=\"top-navigation row\" ng-cloak>\n" +
    "        \n" +
    "        \n" +
    "        <!-- hamburger menu -->\n" +
    "        <div class=\"col-xs-3\">\n" +
    "            <button type=\"button\" class=\"btn btn-link navbar-btn menu\" ng-click=\"toggleOffCanvas()\">\n" +
    "                <span class=\"hyicon hyicon-menu\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- logo -->\n" +
    "        <div class=\"col-xs-5 text-center\">\n" +
    "            <a class=\"logo\" ui-sref=\"base.home\">\n" +
    "                <img ng-src=\"{{GlobalData.store.logo || 'img/logo.png'}}\" alt=\"logo\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        \n" +
    "        <!-- header right -->\n" +
    "        <div class=\"col-xs-4 text-right\">\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <!-- site selector -->\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <site-selector id=\"siteSelectorSmall\"></site-selector>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- cart button -->\n" +
    "                <div class=\"col-xs-6 text-center\">\n" +
    "                    <button type=\"button\" ng-if=\"isShowCartButton()\" id=\"mobile-cart-btn\" class=\"btn btn-link navbar-btn cart-button\"\n" +
    "                            ng-click=\"toggleCart()\">\n" +
    "                        <span class=\"shopping-bag\">\n" +
    "                            <span class=\"quantity\">{{ cart.totalUnitsCount || 0 }}</span>\n" +
    "                        </span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- dekstop navigation only -->\n" +
    "<div class=\"desktopNav hidden-xs hidden-sm visible-md visible-lg\">\n" +
    "    <div class=\"row info\">\n" +
    "\n" +
    "        <!-- logo -->\n" +
    "        <div class=\"col-xs-2 logo navbar-padding navbar-padding-left\">\n" +
    "            <a ui-sref=\"base.home\" class=\"logo\">\n" +
    "                <img ng-src=\"{{GlobalData.store.logo || 'img/logo.png'}}\" alt=\"logo\" />\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    \n" +
    "        <!-- search bar -->\n" +
    "        <div class=\"col-lg-7 col-md-6 col-sm-6 col-xs-6 search navbar-padding navbar-padding-left\" style=\"padding-right: 0px\">\n" +
    "            <ysearch></ysearch>\n" +
    "        </div>\n" +
    "        \n" +
    "        <!-- header right -->\n" +
    "        <div class=\"col-lg-3 col-md-4 col-sm-3 col-xs-4 cart navbar-padding navbar-padding-right\">\n" +
    "            <div class=\"row\">\n" +
    "\n" +
    "                <!-- signin button -->\n" +
    "                <div class=\"col-xs-6 col-md-6\">\n" +
    "                    <div class=\"text-center\">\n" +
    "                        <a id=\"login-btn\" ng-if=\"!user.isAuthenticated\" class=\"signin\" ng-click=\"login({windowClass:'mobileLoginModal'})\" href=\"#\">\n" +
    "                            {{'SIGN_IN' | translate}}\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                    <div ng-if=\"user.isAuthenticated\">\n" +
    "                        <div class=\"signin-container \">\n" +
    "                            <div class=\"text-center dropdown\">\n" +
    "                                <a class=\"my-profile dropdown-toggle\" title=\"{{'MY_ACCOUNT' | translate}}\" id=\"my-account\">\n" +
    "                                    <img id=\"my-account-dropdown\" ng-src=\"{{user.image}}\" class=\"user-avatar socialAvatar\">\n" +
    "                                </a>\n" +
    "                                <ul class=\"dropdown-menu\">\n" +
    "                                    <li role=\"presentation\">\n" +
    "                                        <a role=\"menuitem\" id=\"my-account-link\" tabindex=\"-1\" href=\"#\" ng-click=\"myAccount()\">{{'MY_ACCOUNT' | translate}}</a>\n" +
    "                                    </li>\n" +
    "                                    <li class=\"divider\"></li>\n" +
    "                                    <li  role=\"presentation\" >\n" +
    "                                        <a  role=\"menuitem\" id=\"logout-btn\" tabindex=\"-1\" href=\"#\" ng-click=\"logout()\">{{'SIGN_OUT' | translate}}</a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- site selector -->\n" +
    "                <div class=\"col-xs-3 col-md-3 text-center site-selector-container\">\n" +
    "                    <site-selector id=\"siteSelectorLarge\"></site-selector>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- cart icon -->\n" +
    "                <div class=\"col-xs-3 col-md-3 text-center checkout-btn-container\">\n" +
    "                    <button ng-if=\"isShowCartButton()\" type=\"button\" class=\"btn btn-link navbar-btn\" id=\"full-cart-btn\" ng-click=\"toggleCart()\" ng-cloak>\n" +
    "                        <span class=\"shopping-bag\">\n" +
    "                            <span class=\"quantity\">{{ cart.totalUnitsCount || 0 }}</span>\n" +
    "                        </span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- what is this div for???  -->\n" +
    "            <div class=\"cart-and-account-container\"></div>\n" +
    "\n" +
    "            <!-- clear div -->\n" +
    "            <div class=\"clr\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row nav js-mainNav\">\n" +
    "        <div class=\"content-container\">\n" +
    "            <div class=\"navbar yamm navbar-default\">\n" +
    "                <ul id=\"product-categories\" class=\"nav navbar-nav\">\n" +
    "                    <li ng-repeat=\"top_category in categories\" class=\"dropdown yamm-fw\">\n" +
    "                        <!-- class=\"has-sub\" -->\n" +
    "                        <a ui-sref=\"base.category( {catName: top_category.slug} )\" class=\"js-megamenutoggle mainCategory categoryLevel\">\n" +
    "                            {{ top_category.name  }}\n" +
    "                            <ul class=\"dropdown-menu js-flyoutMenu\" ng-if=\"top_category.subcategories\">\n" +
    "                                <div ng-repeat=\"sub2 in top_category.subcategories\" class=\"col-xs-2\">\n" +
    "\n" +
    "                                    <a data-ui-sref=\"base.category( {catName: sub2.slug} )\" class=\"secondaryCategory categoryLevel\" ng-class=\"{'noSubCategories': sub2.subcategories == undefined}\">\n" +
    "                                        {{sub2.name }}\n" +
    "                                        <div class=\"tertiaryCategory\">\n" +
    "                                            <ul>\n" +
    "                                                <li ng-repeat=\"sub3 in sub2.subcategories\">\n" +
    "                                                    <a class=\"tertiaryLevel categoryLevel\" ui-sref=\"base.category( {catName: sub3.slug} )\">{{ sub3.name }}</a>\n" +
    "                                                </li>\n" +
    "                                            </ul>\n" +
    "                                        </div>\n" +
    "                                    </a>\n" +
    "                                </div>\n" +
    "                            </ul>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('js/app/shared/templates/ysearch.html',
    "<div class=\"y-search\" ng-show=\"search.searchAvailable\">\n" +
    "    <form name=\"searchForm\" novalidate ng-submit=\"goToResultsPage()\">\n" +
    "        <div class=\"right-inner-addon\">\n" +
    "            <i ng-class=\"{'active': search.showSearchResults}\" class=\"glyphicon glyphicon-search js-glyphicon\"></i>\n" +
    "            <input id=\"search\" autocomplete=\"off\" placeholder=\"{{'SEARCH' | translate}}\" type=\"text\" ng-model=\"search.text\"\n" +
    "                   ng-change=\"doSearch(search.text, search.page)\" ng-focus=\"showSearchResults()\"\n" +
    "                   class=\"y-input form-control input-md\"/>\n" +
    "        </div>\n" +
    "        <div class=\"y-search-container\" ng-show=\"search.showSearchResults && search.results.length > 0\">\n" +
    "            <a class=\"form-control y-search-results\" ng-click=\"hideSearchResults()\"\n" +
    "               ui-sref=\"base.product.detail( {productId: result.objectID} )\" ng-repeat=\"result in search.results\">\n" +
    "                <div class=\"y-search-result-thumbnail\">\n" +
    "                    <img class=\"y-search-result-image\" ng-src=\"{{result.image}}\" />\n" +
    "                </div>\n" +
    "                <div class=\"y-search-result-attributes\">\n" +
    "                    <div class=\"y-search-result-name text-left\"\n" +
    "                          ng-bind-html=\"result._highlightResult.name[0].value\"></div>\n" +
    "                    <div ng-if=\"result.categories && result.categories.length > 0\" class=\"y-search-result-category text-left\">{{'IN' | translate}} {{result.categories.join(', ')}}</div>\n" +
    "                    <div class=\"y-search-result-price text-left\">{{result.prices[currency] | currency: currencySymbol }}</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "            <a class=\" y-search-count text-center\" ng-click=\"hideSearchResults()\"\n" +
    "               ui-sref=\"base.search({ searchString:search.text })\">{{'SEE_ALL' | translate}} ({{search.numberOfHits}})\n" +
    "               <span class=\"glyphicon glyphicon-chevron-right pull-right\"></span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"y-search-container y-search-unavailable\" ng-if=\"search.showSearchResults && search.searchError\">\n" +
    "            <div class=\"y-search-unavailable-text\">{{'SEARCH_UNAVAILABLE' | translate}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"y-search-container y-search-unavailable\" ng-if=\"search.showSearchResults && !search.searchError && search.zeroResults\">\n" +
    "            <div class=\"y-search-unavailable-text\">{{'NO_RESULTS_FOUND' | translate}}</div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );

}]);
