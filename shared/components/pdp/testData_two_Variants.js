const testData = {
  productCount: 1,
  offset: 0,
  size: 12,
  isRedirect: false,
  isCompareProductsEnabled: false,
  navigationPath: [
    {
      id: 'beef',
      name: 'Beef',
      categoryNId: 'beef',
      isRootCategory: true,
      hasCategories: true,
      seoData: {
        keywords: [
          'beef',
          'beef online',
          'prime beef',
          'usda beef',
          'steaks online',
          'buy steak online',
          'order steaks online',
          'prime steak',
          'usda steak',
          'filet mignon',
          'beef roasts',
          'beef steak delivery',
          'premium beef online',
          'prime beef online',
          'prime meats delivery'
        ],
        title:
          'Order Steaks Online - Buy Premium Beef Delivery | Allen Brothers',
        description:
          "Order our USDA Prime steaks & aged beef online, famous for outstanding flavor and texture. From ribeye to porterhouse it's the perfect gift for family & friends!",
        slug: 'shop-beef'
      }
    },
    {
      id: 'beef-cut',
      name: 'Shop By Cut',
      categoryNId: 'shop_by_cut',
      isRootCategory: false,
      hasCategories: true,
      seoData: {
        keywords: [
          'beef',
          'beef online',
          'prime beef',
          'usda beef',
          'ground beef',
          'steak',
          'steak online',
          'prime steak',
          'usda steak',
          'filet mignon',
          'beef roasts',
          'steaks',
          'best',
          'quality'
        ],
        title: 'Order Online by Cuts of Beef and Steaks | Allen Brothers',
        description:
          'Browse Allen Brothers online store by types of beef cuts and have prime beef delivered right to your door. Start your shopping now!',
        slug: 'shop-by-cut'
      }
    },
    {
      id: 'strip-steak',
      name: 'Strip Steak',
      categoryNId: 'strip_steak',
      isRootCategory: false,
      hasCategories: false,
      seoData: {
        keywords: [
          'strip steak',
          'strip steaks',
          'new york strip',
          'boneless strip',
          'boneless strip steaks',
          'meat',
          'meat online',
          'kansas city',
          'sirloin',
          'prime',
          'aged steak',
          'bone-in strip',
          'shell steak',
          'bone-in strip'
        ],
        title:
          'Prime New York Strip Steak - Premium Steak Online | Allen Brothers',
        description:
          'Sink your teeth into a savory USDA prime New York strip steak and discover what beef should taste like. Start your online order today!',
        slug: 'strip-steak'
      }
    }
  ],
  products: [
    {
      productId: '10661',
      displayName: 'USDA Prime Natural Beef Boneless Strip Steaks',
      longDisplayName: 'USDA Prime Natural Beef Boneless Strip Steaks',
      description:
        'All-natural USDA Prime with no antibiotics or added hormones',
      longDescription:
        '<p>A natural beef that meets our extremely high standards for taste, texture and marbling. The USDA applies the term &quot;natural&quot; to foods which are minimally processed and without added enhancers or ingredients. We insist the beef we source is raised without the use of added hormones or antibiotics and is pasture raised and finished on a vegetarian diet of grains and grasses. This brings out the marbling and provides a high level of grading. We wet-age our natural beef in vacuum-sealed bags under controlled conditions that prevent moisture from evaporating. This aging process breaks down the meat&#39;s complex proteins from the inside out, producing meat that is even more tender, sweet, and juicy.&nbsp;</p>',
      isActive: true,
      productType: 'product',
      pdpSeoUrl:
        '/Allen Brothers/10661/usda-prime-natural-beef-boneless-strip-steaks.htm',
      isBundle: false,
      isComponent: false,
      onlineOnly: false,
      rating: 0,
      modelCode: null,
      manufacturer: null,
      allowInStorePickup: false,
      isClearance: false,
      skus: {
        98060: {
          skuId: '98060',
          displayName:
            'USDA Prime Natural Beef Boneless Strip Steaks | 4 steaks | 12 oz ea | 1.5" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000296012',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            largeImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            thumbnailImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Natural Beef Boneless Strip Steaks'
          },
          skuOptions: null,
          skuDetails: {
            hasStock: true,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'In Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$214.95',
                isDateRangePriceEnabled: false,
                isVolumePriceEnabled: false,
                isBulkPriceEnabled: false,
                isTieredPriceEnabled: false,
                volumePrices: null
              },
              salePrice: null
            },
            inventory: [
              {
                locationId: '20',
                inventoryStatusLabel: 'In Stock',
                availableStock: 248,
                backorderEnabled: false,
                preOrderEnabled: false,
                alwaysInStock: false
              }
            ],
            skuOptions: [
              {
                optionValue: '4 pcs',
                optionName: 'Count'
              },
              {
                optionValue: '12 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: 'Approx. 10-20 scallops per pkg',
              // thickness: 'Approx. 1.5" Thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '5.0',
              barcode: '91079000296012',
              isNonReturnable: false
            }
          }
        },
        98061: {
          skuId: '98061',
          displayName:
            'USDA Prime Natural Beef Boneless Strip Steaks | 8 steaks | 12 oz ea | 1.5" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000296081',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            largeImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            thumbnailImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Natural Beef Boneless Strip Steaks'
          },
          skuOptions: null,
          skuDetails: {
            hasStock: true,
            hasPrice: true,
            onSale: true,
            inventoryStatusLabel: 'In Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$379.95',
                isDateRangePriceEnabled: false,
                isVolumePriceEnabled: false,
                isBulkPriceEnabled: false,
                isTieredPriceEnabled: false,
                volumePrices: null
              },
              salePrice: {
                price: '$329.96',
                isDateRangePriceEnabled: false,
                isVolumePriceEnabled: false,
                isBulkPriceEnabled: false,
                isTieredPriceEnabled: false,
                volumePrices: null
              }
            },
            inventory: [
              {
                locationId: '20',
                inventoryStatusLabel: 'In Stock',
                availableStock: 253,
                backorderEnabled: false,
                preOrderEnabled: false,
                alwaysInStock: false
              }
            ],
            skuOptions: [
              {
                optionValue: '8 pcs',
                optionName: 'Count'
              },
              {
                optionValue: '12 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: 'Approx. 10-20 scallops per pkg',
              // thickness: 'Approx. 1.5" Thick',
              isConfigurable: false,
              onSale: true,
              skuType: 'products',
              priority: '4.0',
              barcode: '91079000296081',
              isNonReturnable: false
            }
          }
        },
        98062: {
          skuId: '98062',
          displayName:
            'USDA Prime Natural Beef Boneless Strip Steaks | 4 steaks | 16 oz ea | 2" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000296159',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            largeImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            thumbnailImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Natural Beef Boneless Strip Steaks'
          },
          skuOptions: null,
          skuDetails: {
            hasStock: true,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'In Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$269.95',
                isDateRangePriceEnabled: false,
                isVolumePriceEnabled: false,
                isBulkPriceEnabled: false,
                isTieredPriceEnabled: false,
                volumePrices: null
              },
              salePrice: null
            },
            inventory: [
              {
                locationId: '20',
                inventoryStatusLabel: 'In Stock',
                availableStock: 87,
                backorderEnabled: false,
                preOrderEnabled: false,
                alwaysInStock: false
              }
            ],
            skuOptions: [
              {
                optionValue: '4 pcs',
                optionName: 'Count'
              },
              {
                optionValue: '16 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: 'Approx. 2" Thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '2.0',
              barcode: '91079000296159',
              isNonReturnable: false
            }
          }
        },
        98063: {
          skuId: '98063',
          displayName:
            'USDA Prime Natural Beef Boneless Strip Steaks | 8 steaks | 16 oz ea | 2" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000296227',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            largeImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            thumbnailImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Natural Beef Boneless Strip Steaks'
          },
          skuOptions: null,
          skuDetails: {
            hasStock: true,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'In Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$479.95',
                isDateRangePriceEnabled: false,
                isVolumePriceEnabled: false,
                isBulkPriceEnabled: false,
                isTieredPriceEnabled: false,
                volumePrices: null
              },
              salePrice: null
            },
            inventory: [
              {
                locationId: '20',
                inventoryStatusLabel: 'In Stock',
                availableStock: 43,
                backorderEnabled: false,
                preOrderEnabled: false,
                alwaysInStock: false
              }
            ],
            skuOptions: [
              {
                optionValue: '8 pcs',
                optionName: 'Count'
              },
              {
                optionValue: '16 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: 'Approx. 2" Thick',
              isConfigurable: false,
              onSale: true,
              skuType: 'products',
              priority: '1.0',
              barcode: '91079000296227',
              isNonReturnable: false
            }
          }
        },
        98066: {
          skuId: '98066',
          displayName:
            'USDA Prime Natural Beef Boneless Strip Steaks | 2 steaks | 12 oz ea | 1.5" Thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000489407',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            largeImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            thumbnailImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Natural Beef Boneless Strip Steaks'
          },
          skuOptions: null,
          skuDetails: {
            hasStock: true,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'In Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$119.95',
                isDateRangePriceEnabled: false,
                isVolumePriceEnabled: false,
                isBulkPriceEnabled: false,
                isTieredPriceEnabled: false,
                volumePrices: null
              },
              salePrice: null
            },
            inventory: [
              {
                locationId: '20',
                inventoryStatusLabel: 'In Stock',
                availableStock: 1012,
                backorderEnabled: false,
                preOrderEnabled: false,
                alwaysInStock: false
              }
            ],
            skuOptions: [
              {
                optionValue: '2 pcs',
                optionName: 'Count'
              },
              {
                optionValue: '12 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: 'Approx. 10-20 scallops per pkg',
              // thickness: 'Approx. 1.5" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '6.0',
              barcode: '91079000489407',
              isNonReturnable: false
            }
          }
        },
        98067: {
          skuId: '98067',
          displayName:
            'USDA Prime Natural Beef Boneless Strip Steaks | 2 steaks | 16 oz ea | 2" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000489469',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            largeImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            thumbnailImg:
              '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Natural Beef Boneless Strip Steaks'
          },
          skuOptions: null,
          skuDetails: {
            hasStock: true,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'In Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$149.95',
                isDateRangePriceEnabled: false,
                isVolumePriceEnabled: false,
                isBulkPriceEnabled: false,
                isTieredPriceEnabled: false,
                volumePrices: null
              },
              salePrice: null
            },
            inventory: [
              {
                locationId: '20',
                inventoryStatusLabel: 'In Stock',
                availableStock: 346,
                backorderEnabled: false,
                preOrderEnabled: false,
                alwaysInStock: false
              }
            ],
            skuOptions: [
              {
                optionValue: '2 pcs',
                optionName: 'Count'
              },
              {
                optionValue: '16 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: 'Approx. 2" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '3.0',
              barcode: '91079000489469',
              isNonReturnable: false
            }
          }
        }
      },
      skuSwatches: [],
      variantOptions: {
        Count: [
          {
            optionValue: '2 pcs',
            associatedSkuIds: ['98066', '98067']
          },
          {
            optionValue: '4 pcs',
            associatedSkuIds: ['98062', '98060']
          },
          {
            optionValue: '8 pcs',
            associatedSkuIds: ['98061', '98063']
          }
        ],
        Weight: [
          {
            optionValue: '12 oz',
            associatedSkuIds: ['98061', '98060', '98066'],
            skuId: '98061',
            hasStock: true,
            thickness: 'Approx. 10-20 scallops per pkg'
          },
          {
            optionValue: '16 oz',
            associatedSkuIds: ['98062', '98063', '98067'],
            skuId: '98063',
            hasStock: true,
            thickness: 'Approx. 2" Thick'
          }
        ]
      },
      brand: {
        brandId: 'allenBrothers',
        displayName: 'Allen Brothers'
      },
      productInventoryVo: {
        inventoryStatusLabel: 'In Stock',
        isStockAvailable: true,
        alwaysInStock: false,
        isStoreOnly: false,
        isBackorderable: false,
        isPreOrderable: false,
        backorderable: false,
        preOrderable: false,
        stockAvailable: true,
        storeOnly: false
      },
      productPrice: {
        minListPrice: 119.95,
        maxListPrice: 479.95,
        minSalePrice: 329.96,
        maxSalePrice: 329.96,
        listPriceRange: '$119.95-$479.95',
        salePriceRange: '$329.96',
        onSale: true,
        hasPrice: true,
        canAllowPurchaseInqry: false
      },
      defaultSkuId: '98061',
      hasStock: true,
      hasPrice: true,
      isAccessory: false,
      hazmat: false,
      restricted: false,
      additionalDetails: {
        nutritionalInfo:
          '<div class="row">\n<div class="col-md-6"><img loading="lazy" src="/dam/AB/storefront/general/98060.png" /></div>\n</div>',
        isGuideline: false,
        isDiscountable: true,
        isNeverFrozen: false,
        nutritionalInfoImages: ['/dam/storefront/general/98060.png'],
        isNonReturnable: false,
        productCategory: 'USDA PRIME',
        facebookFeedProductCategory: 'food & beverages > food > meat & seafood',
        googleFeedProductCategory:
          'Food, Beverages & Tobacco > Food Items > Meat, Seafood & Eggs > Meat',
        nutritionalInfoContent: [
          '{"ID_PROD":"10661","PrdImg_ID":"98060","ServingSize":"1 steak(340g)","Calories":"650","Fat_gm":"42","Fat_percent":"54","SaturatedFat_gm":"16","SaturatedFat_percent":"79","TransFat_gm":"2.5","Cholesterol_gm":"230","Cholesterol_percent":"77","Sodium_gm":"270","Sodium_percent":"12","TotalCarb_gm":"0","TotalCarb_percent":"0","DieteryFiber_gm":"0","DieteryFiber_percent":"0","TotalSugar_gm":"0","AddedSugar_gm":"0","AddedSugar_percent":"0","Protein_gm":"68","VitD_mcg":"0","VitD_percent":"0","Calcium_mg":"20","Calcium_percent":"0","Iron_mg":"8","Iron_percent":"45","Potassium_mg":"1108","Potassium_percent":"25","Ingredients":"Beef","Servings":"variable","Protein_percent":null,"Calories_from_fat":null,"Polysaturated_fat":null,"Monosaturated_fat":null,"Sugar_alcohol":null,"Vitamin_A":null,"Vitamin_C":null}'
        ],
        isNewProduct: false,
        isPrimeProduct: true,
        isShippable: true
      },
      productDetails: {
        productMedia: {
          default: {
            media: {
              smallImg:
                '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
              largeImg:
                '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
              thumbnailImg:
                '/dam/AB/catalog/images/product/2014-nat-boneless-strip-680.jpg',
              videoHtmls: [''],
              altText: 'USDA Prime Natural Beef Boneless Strip Steaks'
            }
          }
        },
        productAssociations: {
          3007: ['10662', '10664', '10665', '10666'],
          cooking_guides: ['152']
        },
        productSpecification: {
          features: []
        },
        productOption: {
          productGrpId: 'pieces-oz',
          productGrpName: 'Pieces & Oz',
          configuredOptions: [
            {
              optionName: 'Count',
              isMediaKey: false,
              optionValues: [
                'PCS',
                'pcs',
                '2 pcs',
                '16 pcs',
                '18 pcs',
                '3 pcs',
                '25 pcs',
                '12 pcs',
                '1 pc',
                '4 pcs',
                '8 pcs',
                '24 pcs',
                '6 pcs'
              ]
            },
            {
              optionName: 'Weight',
              isMediaKey: false,
              optionValues: [
                '12 oz',
                '5-7 oz',
                '3-5 oz',
                '2-2.5 oz',
                '6 oz',
                '16 oz',
                '2 oz',
                '6-7 oz',
                '22 oz',
                '26 oz',
                '2.6 oz',
                '3.9 oz',
                '.4 oz',
                '9 oz',
                '3-4 oz',
                '5-6 oz',
                '32 oz',
                '1 oz',
                '30-34 oz',
                '5 oz',
                '9-10 oz',
                '14-18 oz',
                '16-20 oz',
                '36 oz',
                '6-8 oz',
                '20-22 oz',
                '28-30 oz',
                '4-6 oz',
                '14 oz',
                '10 oz',
                '8 oz',
                '4 oz',
                '24 oz',
                '8-10 oz',
                '20 oz',
                '.75 oz',
                '2.25 oz',
                'avg 11 oz each',
                '7-9 oz',
                '4.5 oz',
                '7 oz',
                '3 oz',
                '18-20 oz',
                '13-15 oz',
                '48 oz',
                '20-24 oz',
                '2-4 oz',
                '12-14 oz',
                '2.8 oz'
              ]
            }
          ],
          active: true
        },
        hasProductOptions: true,
        productCategory: {
          id: 'strip-steak',
          displayName: 'Strip Steak'
        },
        isGiftItem: false
      },
      associatedWarrantyIds: null,
      breadcrumbs: ['beef', 'beef-cut', 'strip-steak'],
      seoData: {
        keywords: [],
        title: 'Natural Beef Boneless Strip  | Allen Brothers',
        description: '',
        slug: 'usda-prime-natural-beef-boneless-strip'
      },
      active: true,
      bundle: false,
      component: false,
      clearance: false,
      accessory: false
    }
  ],
  sortVO: [
    {
      sortLabel: 'Best Match ',
      sortValue: 'sortRelevancy',
      isSelected: false
    },
    {
      sortLabel: 'Price:Low to High',
      sortValue: 'priceASC',
      isSelected: false
    },
    {
      sortLabel: 'Price:High to Low',
      sortValue: 'priceDESC',
      isSelected: false
    },
    {
      sortLabel: 'Best Sellers',
      sortValue: 'bestSellerRank',
      isSelected: false
    },
    {
      sortLabel: 'Title : A-Z',
      sortValue: 'product.displayNameAtoZ',
      isSelected: false
    },
    {
      sortLabel: 'Title : Z-A',
      sortValue: 'product.displayNameZtoA',
      isSelected: false
    }
  ],
  webEnabledAttr: {
    keywords: [],
    title: ''
  },
  categoryFacetEnabled: false,
  redirect: false,
  compareProductsEnabled: false
}

export { testData }
