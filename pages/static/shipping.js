import React from 'react';
import HighlightedProducts from './highlighted-products';

export default function Shipping() {
  return (
    <div id="main" className="static-main-container shipping-policy">
      <div className="row">
        <div data-bind="template: { name: 'region-template', foreach: regions }" className="redBox">
          <div className="col-sm-12" id="region-megaMenuRegionShippingPage">
            <div id="ALLN-Article-Page-Breadcrumb_v1-wi400044">
              <nav className="breadcrumbs-block hidden-print">
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">Shipping</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-12colshipping">
            <div id="webContent_v2-wi200047">
              <div className="row">
                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                  <span data-bind="element: 'image',id: '10022'" id="wi200047-image-10022">
                    <div className="cc-image">
                      <img 
                      className="panel-main-image"
                      src="https://www.allenbrothers.com/file/v2255593956534901953/general/article-image.jpg" 
                      title="Shipping Page Hero Image" />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-re200113">
            <div id="webContent_v2-wi200048">
              <div className="row">
                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                  <span data-bind="element: 'rich-text',id: '10023'" id="wi200048-rich-text-10023">
                    <div className="cc-rich-text">
                      <h2>Choosing when to receive your order from Allen Brothers is easy and fast!</h2>
                      <p>When checking out, simply select your desired&nbsp; day of delivery&nbsp;on the
                        shipping calendar and complete your order - we’ll take care of the rest.
                        Need to ship items in your order to more than one address?
                        Be sure to LOG IN and then select&nbsp;SHIP TO MULTIPLE ADDRESSES when checking out.</p>

                      <h2>How Much Does Shipping Cost?</h2>

                      <p>Delivery costs are based on the number of items purchased and being sent to a single address
                        as well as the service needed to meet your requested delivery date.</p>

                      <h2>Allen Brothers Prime Delivery Rates:</h2>

                      <h4>CONTINENTAL UNITED STATES</h4>

                      <table className="content-table">
                        <thead>
                          <tr>
                            <th><strong># OF ITEMS</strong></th>
                            <th><strong>SHIPPING COST</strong></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1 Item*</td>
                            <td>$24.95</td>
                          </tr>
                          <tr>
                            <td>2 Items</td>
                            <td>$29.95</td>
                          </tr>
                          <tr>
                            <td>3 Items</td>
                            <td>$34.95</td>
                          </tr>
                          <tr>
                            <td>4+ Items*</td>
                            <td>$39.95</td>
                          </tr>
                          <tr>
                            <td>5+ Items*</td>
                            <td>$44.95</td>
                          </tr>
                        </tbody>
                      </table>

                      <h4>ALASKA, HAWAII, &amp; PUERTO RICO</h4>

                      <table className="content-table">
                        <thead>
                          <tr>
                            <th><strong># OF ITEMS</strong></th>
                            <th><strong>SHIPPING COST</strong></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1 Item*</td>
                            <td>$64.95</td>
                          </tr>
                          <tr>
                            <td>2 Items</td>
                            <td>$74.95</td>
                          </tr>
                          <tr>
                            <td>3+ Items</td>
                            <td>$84.95</td>
                          </tr>
                        </tbody>
                      </table>

                      <p>*&nbsp;An item is one numbered item from our catalog.</p>

                      <p>**&nbsp;Deliveries to Alaska, Hawaii &amp; Puerto Rico require overnight delivery and
                        must be placed with our Customer Service Team at 800.548.7777. Prices shown include overnight delivery.</p>

                      <p>***&nbsp;We’re sorry – we no longer accept orders for delivery to Canadian addresses.</p>

                      <p>****&nbsp;Physical Gift Cards require a $5 Delivery Charge, add $25 for Overnight Delivery.&nbsp;
                        <a href="https://www.allenbrothers.com/gift-card/gift-card/gc-10001" title="eGiftCard">eGift Cards</a>&nbsp;deliver instantly and free of charge.</p>

                      <h2>What we need from you:</h2>

                      <p>We want to make sending the gift of Allen Brothers a seamless and flawless experience for you
                        and your gift recipients.</p>

                      <p>Please be sure to confirm your gift recipients’ current address and that they will be present
                        to accept your gift on the delivery day requested. Incorrect addresses or recipients not available to receive their gift could result in spoilage and disappointment. Sorry, we cannot deliver to P.O. Boxes.</p>

                      <p>*Spoilage/damage/missing deliveries due to incorrect or incomplete shipping addresses voids our Satisfaction Guarantee. Please be sure to double-check your delivery addresses.</p>

                      <h2>How will my order be packed?</h2>

                      <p>To ensure that your product arrives at its destination in wholesome condition, we pack your order using our exclusive AB Prime Protection®&nbsp;packaging. All meats are individually shrink-wrapped, then flash frozen to lock in all the natural juices and flavor. The meats are packed in an attractive gift box and nestled in a 100% recycled PET insulated liner (#1 recyclable)&nbsp;with enough dry ice to ensure safe delivery. Finally, the container is placed in a heavy-duty corrugated box for an additional layer of protection. It's the best way to ensure that every product is delivered in wholesome condition.</p>

                      <h2>When will my order arrive?</h2>

                      <h3>ALLEN BROTHERS PRIME DELIVERY SERVICE</h3>

                      <p>We are eager to pack and ship your Allen Brothers order and offer your choice of the following Allen Brothers Prime Delivery Days:&nbsp;Wednesday, Thursday, or Friday.</p>

                      <ul>
                        <li>Orders placed&nbsp;BEFORE&nbsp;Noon CST can be received within as little as just&nbsp;two business days!</li>
                        <li>Orders placed&nbsp;BEFORE Wednesday, Noon CST&nbsp;to receive your order on&nbsp;Friday&nbsp;of the same week.</li>
                        <li>Orders placed&nbsp;AFTER Wednesday, Noon CST&nbsp;will reflect available Allen Brothers&nbsp;Prime Delivery Dates&nbsp;for the following week as we do not ship our products over the weekend.</li>
                      </ul>

                      <h3>OVERNIGHT DELIVERY SERVICE</h3>

                      <p>Overnight Delivery Service&nbsp;reduces the time-in-transit to just 1 day for&nbsp;an additional $25&nbsp;and is the perfect solution if:</p>

                      <ul>
                        <li>Would like to schedule a delivery on a&nbsp;Tuesday</li>
                        <li>Would like to receive your order on a&nbsp;Friday, but missed the&nbsp;Friday Allen Brothers Prime Delivery Cutoff&nbsp;(Wednesday, Noon CST).</li>
                      </ul>

                      <h3>SATURDAY DELIVERY SERVICES</h3>

                      <p>For those who would like to receive their delivery on Saturday (where available):</p>

                      <ul>
                        <li>Orders placed&nbsp;BEFORE&nbsp;Thursday, Noon CST require an additional&nbsp;$25 Saturday Delivery charge.</li>
                        <li>Orders placed&nbsp;AFTER&nbsp;Thursday, Noon CST requires an&nbsp;additional $65 Overnight + Saturday Delivery charge.</li>
                      </ul>

                      <p>Below is our Order Deadline Table which describes Order Cut-offs and Expected Delivery Day in detail:</p>

                      <table className="content-table mobile-table-scroll">
                        <thead>
                          <tr>
                            <th><strong>ORDER DATE</strong></th>
                            <th><strong>SHIPPING DATE</strong></th>
                            <th><strong>1<sup>ST</sup>&nbsp;AVAILABLE AB PRIME DELIVERY DAY</strong></th>
                            <th><strong>1<sup>ST</sup>&nbsp;AVAILABLE OVERNIGHT DELIVERY<br/>
                              DAY*</strong></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Order Day before Noon CST&nbsp;<strong>Monday</strong></td>
                            <td>Shipping Day&nbsp;<strong>Monday</strong></td>
                            <td>AB Prime Delivery&nbsp;Day&nbsp;<strong>Wednesday</strong></td>
                            <td>Overnight Delivery&nbsp;Day *<strong>Tuesday*</strong></td>
                          </tr>
                          <tr>
                            <td>Order Day before Noon CST&nbsp;<strong>Tuesday</strong></td>
                            <td>Shipping Day&nbsp;<strong>Tuesday</strong></td>
                            <td>AB Prime Delivery&nbsp;Day&nbsp;<strong>Thursday</strong></td>
                            <td>Overnight Delivery&nbsp;Day *<strong>Wednesday*</strong></td>
                          </tr>
                          <tr>
                            <td>Order Day before Noon CST&nbsp;<strong>Wednesday</strong></td>
                            <td>Shipping&nbsp;Day&nbsp;<strong>Wednesday</strong></td>
                            <td>AB Prime Delivery&nbsp;Day&nbsp;<strong>Friday</strong></td>
                            <td>Overnight Delivery&nbsp;Day *<strong>Thursday*</strong></td>
                          </tr>
                          <tr>
                            <td>Order Day before Noon CST&nbsp;<strong>Thursday</strong></td>
                            <td>Shipping&nbsp;Day&nbsp;<strong>Thursday</strong></td>
                            <td>AB Prime Delivery&nbsp;<strong>Saturday**</strong></td>
                            <td>Overnight Delivery&nbsp;Day *<strong>Friday*</strong></td>
                          </tr>
                          <tr>
                            <td>Order Day before Noon CST&nbsp;<strong>Friday</strong></td>
                            <td>Shipping&nbsp;Day&nbsp;<strong>Friday</strong></td>
                            <td>AB Prime Delivery&nbsp;Day&nbsp;<strong>N/A</strong></td>
                            <td>Overnight Delivery&nbsp;Day&nbsp;<strong>Saturday***</strong></td>
                          </tr>
                          <tr>
                            <td>Order Day CST&nbsp;<strong>Saturday</strong></td>
                            <td>Shipping&nbsp;Day&nbsp;<strong>Monday</strong></td>
                            <td>AB Prime Delivery&nbsp;Day&nbsp;<strong>Wednesday</strong></td>
                            <td>Overnight Delivery&nbsp;Day *<strong>Tuesday*</strong></td>
                          </tr>
                          <tr>
                            <td>Order Day CST&nbsp;<strong>Sunday</strong></td>
                            <td>Shipping&nbsp;Day&nbsp;<strong>Monday</strong></td>
                            <td>AB Prime Delivery&nbsp;Day&nbsp;<strong>Wednesday</strong></td>
                            <td>Overnight Delivery&nbsp;Day *<strong>Tuesday*</strong></td>
                          </tr>
                        </tbody>
                      </table>

                      <p>*Orders requesting Overnight Delivery will require an additional $25 delivery charge</p>

                      <p>**Orders requesting Saturday Delivery placed BEFORE Thursday, Noon CST require an additional $25 Saturday Delivery charge.</p>

                      <p>***Orders requesting Saturday Delivery placed AFTER Thursday, Noon CST requires an additional $65 Overnight + Saturday Delivery charge</p>

                      <p>While we will make every attempt to adhere to the below tables as much as possible, holidays and unforeseen circumstances can force exceptions to the shipping and delivery schedule. For orders shipped during holiday seasons, please see the Holiday Ordering Information below.</p>

                      <h2>Ordering Deadlines for Holiday Delivery</h2>

                      <table className="content-table mobile-table-scroll">
                        <thead>
                          <tr>
                            <th>ORDER BY 12 NOON CST:</th>
                            <th>FOR ARRIVAL BEFORE:</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Wed, Aug 31, 2022</td>
                            <td>Labor Day, Sept 5, 2022</td>
                          </tr>
                          <tr>
                            <td>Mon, Nov 21, 2022</td>
                            <td>Thanksgiving Day, Nov 24, 2022</td>
                          </tr>
                          <tr>
                            <td>Wed, Dec 14, 2022</td>
                            <td>First night of Hanukkah, Dec 18, 2022</td>
                          </tr>
                          <tr>
                            <td>Tues, Dec 20, 2022</td>
                            <td>Christmas Eve, Dec 24, 2022</td>
                          </tr>
                          <tr>
                            <td>Tues, Dec 27, 2022</td>
                            <td>New Year's Eve, Dec 31, 2022</td>
                          </tr>
                        </tbody>
                      </table>

                      <h2>Important Delivery Notes for December:</h2>

                      <ul>
                        <li><strong>We encourage you to order and schedule holiday gift deliveries as&nbsp;early in December as possible.</strong></li>
                        <li>Due to heavy shipping volume during the Holiday Season, your order may arrive&nbsp;one or two days earlier than requested.</li>
                        <li>Requests for order modifications to orders delivering during the month of December such as: change of address or item and the addition of a gift message,&nbsp;may result in delay of your requested delivery or may not be able to be accommodated.</li>
                        <li>Inclement weather and other unforeseen circumstances can cause shipments to&nbsp;arrive later than expected.</li>
                        <li>Once our Delivery Reservation Limit for specific days leading up to Christmas is reached, we will provide you with alternate delivery dates which may include:
                          <ul>
                            <li>Delivery dates before the week of Christmas</li>
                            <li>Delivery dates between Christmas and New Year’s Eve</li>
                            <li>Delivery dates after New Year’s Day</li>
                            <li>The purchase/delivery of an&nbsp;<a href="https://www.allenbrothers.com/gift-card/" title="eGiftCard">eGiftCard</a>&nbsp;which can be delivered instantly</li>
                          </ul>
                        </li>
                        <li><strong>Please order and schedule your delivery to arrive&nbsp;as early in December as possible</strong>.</li>
                      </ul>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HighlightedProducts />
      <div className="row">
        <div data-bind="template: { name: 'region-template', foreach: regions }" className="redBox">
        </div>
      </div>
    </div>
  );
}
