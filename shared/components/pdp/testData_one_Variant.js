const testData = {
  productCount: 1,
  offset: 0,
  size: 12,
  isRedirect: false,
  isCompareProductsEnabled: false,
  navigationPath: [
    {
      id: 'and-more-prepared-foods',
      name: 'Prepared Foods',
      categoryNId: 'prepared_foods',
      isRootCategory: true,
      hasCategories: true,
      seoData: {
        keywords: [],
        title: 'Order Prepared Foods Online | Allen Brothers',
        description:
          'Order from our online collection of prepared foods today for weekly dinners, events, and family gatherings! Complete your family meals appetizers and desserts!',
        slug: 'prepared-foods'
      }
    },
    {
      id: 'desserts',
      name: 'Desserts',
      categoryNId: 'desserts',
      isRootCategory: false,
      hasCategories: false,
      seoData: {
        keywords: [],
        title:
          'Desserts for Sale Online - Order Desserts Online | Allen Brothers',
        description:
          'Complete your holiday feast or dinner party with a decadent ending. Try our pre-made thaw and serve desserts! Order luxurious cakes, pies, and more online today!',
        slug: 'desserts'
      }
    }
  ],
  products: [
    {
      productId: '10214',
      displayName: "Grandma's And Great Grandma's Chocolate Cakes",
      longDisplayName: "Grandma's And Great Grandma's Chocolate Cakes",
      description:
        "Choose from our decadent two-layer Grandma's cake or an over the top six-layer Great Grandma's cake",
      longDescription:
        '<p>An impressive chocolate cake, even better than in the finest steakhouses, with velvety chocolate cake layers and enrobed in thick chocolate fudge icing, packed with over the top chocolate flavor. A true treat for any chocolate fan! Select either our decadent 2-layer Grandma&#39;s cake which serves 14-16, or indulge in our towering 6-layer Great Grandma&#39;s cake whch serves 18 or more. Each cake is 10&quot; in diameter.</p>',
      isActive: true,
      productType: 'product',
      pdpSeoUrl:
        '/Allen Brothers/10214/grandma-s-and-great-grandma-s-chocolate-cakes.htm',
      isBundle: false,
      isComponent: false,
      onlineOnly: false,
      rating: 0,
      modelCode: null,
      manufacturer: null,
      allowInStorePickup: false,
      isClearance: false,
      skus: {
        99969: {
          skuId: '99969',
          displayName: "Grandma's Chocolate Cake ",
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '9.11E+13',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/10214.jpg',
            largeImg: '/dam/AB/catalog/images/product/10214.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/10214.jpg',
            videoHtmls: [''],
            altText: "Grandma's And Great Grandma's Chocolate Cakes"
          },
          skuOptions: null,
          skuDetails: {
            hasStock: false,
            // hasStock: true,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'In Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$59.95',
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
                availableStock: 184,
                backorderEnabled: false,
                preOrderEnabled: false,
                alwaysInStock: false
              }
            ],
            skuOptions: [
              {
                optionValue: '3 lbs',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '\\| 2-layer',
              isConfigurable: false,
              onSale: true,
              skuType: 'products',
              priority: '2.0',
              barcode: '91079000356280',
              isNonReturnable: false
            }
          }
        },
        99971: {
          skuId: '99971',
          displayName: "Great Grandma's Chocolate Cake ",
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '9.11E+13',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/10214.jpg',
            largeImg: '/dam/AB/catalog/images/product/10214.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/10214.jpg',
            videoHtmls: [''],
            altText: "Grandma's And Great Grandma's Chocolate Cakes"
          },
          skuOptions: null,
          skuDetails: {
            hasStock: false,
            // hasStock: true,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'In Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$79.95',
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
                availableStock: 184,
                backorderEnabled: false,
                preOrderEnabled: false,
                alwaysInStock: false
              }
            ],
            skuOptions: [
              {
                optionValue: '9 lbs',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '\\| 6-layer',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '1.0',
              barcode: '91079000356457',
              isNonReturnable: false
            }
          }
        }
      },
      skuSwatches: [],
      variantOptions: {
        Weight: [
          {
            optionValue: '3 lbs',
            associatedSkuIds: ['99969']
          },
          {
            optionValue: '9 lbs',
            associatedSkuIds: ['99971'],
            skuId: '99971',
            hasStock: false,
            // hasStock: true,
            thickness: '\\| 6-layer'
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
        stockAvailable: true,
        storeOnly: false,
        backorderable: false,
        preOrderable: false
      },
      productPrice: {
        minListPrice: 59.95,
        maxListPrice: 79.95,
        minSalePrice: 0,
        maxSalePrice: 0,
        listPriceRange: '$59.95-$79.95',
        salePriceRange: null,
        onSale: false,
        hasPrice: true,
        canAllowPurchaseInqry: false
      },
      defaultSkuId: '99969',
      hasStock: true,
      hasPrice: true,
      isAccessory: false,
      hazmat: false,
      restricted: false,
      additionalDetails: {
        nutritionalInfo:
          '<div class="row">\n<div class="col-md-6"><img alt="Nutrition label" loading="lazy" src="/dam/AB/storefront/general/99969.png" /></div>\n\n<div class="col-md-6"><img alt="Nutrition label" loading="lazy" src="/dam/AB/storefront/general/99971.png" /></div>\n</div>',
        isGuideline: false,
        isDiscountable: true,
        isNeverFrozen: false,
        nutritionalInfoImages: [
          '/dam/storefront/general/99969.png',
          '/dam/storefront/general/99971.png'
        ],
        isNonReturnable: false,
        productCategory: 'DESSERT',
        facebookFeedProductCategory: 'food & beverages > food > bakery & bread',
        googleFeedProductCategory:
          'Food, Beverages & Tobacco > Food Items > Prepared Foods > Prepared Appetizers & Side Dishes',
        nutritionalInfoContent: [
          '{"ID_PROD":"10214","PrdImg_ID":"99969","ServingSize":"4 1/5 Oz(119g)","Calories":"470","Fat_gm":"22","Fat_percent":"33","SaturatedFat_gm":"10","SaturatedFat_percent":"52","TransFat_gm":null,"Cholesterol_gm":"75","Cholesterol_percent":"25","Sodium_gm":"310","Sodium_percent":"13","TotalCarb_gm":"70","TotalCarb_percent":"23","DieteryFiber_gm":"3","DieteryFiber_percent":"13","TotalSugar_gm":"55","AddedSugar_gm":null,"AddedSugar_percent":null,"Protein_gm":"5","VitD_mcg":null,"VitD_percent":null,"Calcium_mg":null,"Calcium_percent":"15","Iron_mg":null,"Iron_percent":"15","Potassium_mg":null,"Potassium_percent":null,"Ingredients":null,"Servings":"16","Protein_percent":null,"Calories_from_fat":"190","Polysaturated_fat":null,"Monosaturated_fat":null,"Sugar_alcohol":null,"Vitamin_A":"15","Vitamin_C":"0"}',
          '{"ID_PROD":"10214","PrdImg_ID":"99971","ServingSize":"9 63/95 Oz(274g)","Calories":"1050","Fat_gm":"56","Fat_percent":"86","SaturatedFat_gm":"22","SaturatedFat_percent":"108","TransFat_gm":null,"Cholesterol_gm":"180","Cholesterol_percent":"61","Sodium_gm":"920","Sodium_percent":"38","TotalCarb_gm":"140","TotalCarb_percent":"47","DieteryFiber_gm":"8","DieteryFiber_percent":"33","TotalSugar_gm":"99","AddedSugar_gm":null,"AddedSugar_percent":null,"Protein_gm":"11","VitD_mcg":null,"VitD_percent":null,"Calcium_mg":null,"Calcium_percent":"35","Iron_mg":null,"Iron_percent":"30","Potassium_mg":null,"Potassium_percent":null,"Ingredients":null,"Servings":"16","Protein_percent":null,"Calories_from_fat":"490","Polysaturated_fat":null,"Monosaturated_fat":null,"Sugar_alcohol":null,"Vitamin_A":"30","Vitamin_C":"0"}'
        ],
        isNewProduct: false,
        isPrimeProduct: false,
        isShippable: true
      },
      productDetails: {
        productMedia: {
          default: {
            media: {
              smallImg: '/dam/AB/catalog/images/product/10214.jpg',
              largeImg: '/dam/AB/catalog/images/product/10214.jpg',
              thumbnailImg: '/dam/AB/catalog/images/product/10214.jpg',
              videoHtmls: [''],
              altText: "Grandma's And Great Grandma's Chocolate Cakes"
            }
          }
        },
        productAssociations: {
          3007: ['10207', ' 10216'],
          cooking_guides: ['cg10214']
        },
        productSpecification: {},
        productOption: {
          productGrpId: 'lbs',
          productGrpName: 'lbs',
          configuredOptions: [
            {
              optionName: 'Weight',
              isMediaKey: false,
              optionValues: [
                '1 lbs',
                '2 lbs',
                '3.5 lbs',
                '4.5 lbs',
                '3 lbs',
                '9 lbs',
                '6 lbs'
              ]
            }
          ],
          active: true
        },
        hasProductOptions: true,
        productCategory: {
          id: 'desserts',
          displayName: 'Desserts'
        },
        isGiftItem: false
      },
      associatedWarrantyIds: null,
      breadcrumbs: ['and-more-prepared-foods', 'desserts'],
      seoData: {
        keywords: [''],
        title: 'Chocolate Cakes ',
        slug: 'grandmas-and-great-grandmas-chocolate-cakes',
        canonicalUrl: 'null'
      },
      active: true,
      accessory: false,
      bundle: false,
      component: false,
      clearance: false
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
