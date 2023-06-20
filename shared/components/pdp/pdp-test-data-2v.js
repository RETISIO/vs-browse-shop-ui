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
      id: 'filet-mignon',
      name: 'Filet Mignon',
      categoryNId: 'filet_mignon',
      isRootCategory: false,
      hasCategories: false,
      seoData: {
        keywords: [
          'filet mignon',
          'filet',
          'mignon',
          'beef tenderloin',
          'beef',
          'tenderloin',
          'prime cut',
          'meat',
          'prime',
          'aged'
        ],
        title:
          'Filet Mignon for Sale Online - Order & Buy Now | Allen Brothers',
        description:
          'Are you searching for filet mignon online? Shop our selection of the finest filet mignon for sale. Browse our finest steak options and order online today!',
        slug: 'filet-mignon'
      }
    }
  ],
  products: [
    {
      productId: '10001',
      displayName: 'USDA Prime Filet Mignon',
      longDisplayName: 'USDA Prime Filet Mignon',
      description:
        'Completely trimmed of exterior fat and slowly-wet aged for the very best flavor and texture',
      longDescription:
        '<h2>Allen Brothers&rsquo; USDA Prime Filet Mignon: Completely Trimmed - And Completely Delicious!</h2>\n\n<p>When it comes to filet mignon, Allen Brothers is the name you can trust. Our reputation for offering only the finest Prime beef has been our trademark since 1893. Order your filet mignon today and taste the difference!</p>\n\n<p>This Prime cut of beef is hand-trimmed to perfection and is sure to give your taste buds a treat. These lean, tender cuts are trimmed of all exterior fat but are still marbled enough for a buttery tenderness and delectable flavor. When only the best will do, Prime filet mignon is the answer.</p>\n\n<p>We wet-age our Prime filet mignon in vacuum-sealed bags under controlled conditions that prevent moisture from evaporating. This aging process breaks down the meat&#39;s complex proteins from the inside out, producing meat that is even more tender, sweet, and juicy.</p>\n\n<p>As with any of our Prime meats, we recommend that you cook your filet mignon slowly over low heat to preserve its delicate flavor and texture. We also recommend that you let it rest for a few minutes before cutting into it, as this allows the juices to redistribute evenly throughout the meat.</p>\n\n<p>So if you&#39;re looking for the best filet mignon available, look no further than our USDA Prime filet mignon. It&#39;s the perfect cut of beef for any occasion. Order your Prime filet mignon today!</p>',
      isActive: true,
      productType: 'product',
      pdpSeoUrl: '/Allen Brothers/10001/usda-prime-filet-mignon.htm',
      isBundle: false,
      isComponent: false,
      onlineOnly: false,
      rating: 0,
      modelCode: null,
      manufacturer: null,
      allowInStorePickup: false,
      isClearance: false,
      skus: {
        98114: {
          skuId: '98114',
          displayName:
            'USDA Prime Filet Mignon | 2 filets | 10 oz ea | 2" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000226958',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
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
                price: '$129.95',
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
                availableStock: 108,
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
                optionValue: '10 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '2" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '3.0',
              barcode: '91079000226958',
              isNonReturnable: false
            }
          }
        },
        98426: {
          skuId: '98426',
          displayName:
            'USDA Prime Filet Mignon | 2 filets | 6 oz ea | 1.75" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000452401',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
          },
          skuOptions: null,
          skuDetails: {
            // hasStock: true,
            hasStock: false,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'In Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$89.95',
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
                availableStock: 2956,
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
                optionValue: '6 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '1.75" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '9.0',
              barcode: '91079000452401',
              isNonReturnable: false
            }
          }
        },
        98580: {
          skuId: '98580',
          displayName:
            'USDA Prime Filet Mignon | 4 filets | 6 oz ea | 1.75" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000444277',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
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
                price: '$159.95',
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
                availableStock: 364,
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
                optionValue: '6 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '1.75" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '8.0',
              barcode: '91079000444277',
              isNonReturnable: false
            }
          }
        },
        98586: {
          skuId: '98586',
          displayName:
            'USDA Prime Filet Mignon | 2 filets | 8 oz ea | 2" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000492322',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
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
                price: '$114.95',
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
                availableStock: 1168,
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
                optionValue: '8 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '2" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '6.0',
              barcode: '91079000492322',
              isNonReturnable: false
            }
          }
        },
        99095: {
          skuId: '99095',
          displayName:
            'USDA Prime Filet Mignon | 8 filets | 5 oz ea | 1.5" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000304465',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
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
                price: '$249.95',
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
                availableStock: 580,
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
                optionValue: '5 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '1.5" thick',
              isConfigurable: false,
              onSale: true,
              skuType: 'products',
              priority: '10.0',
              barcode: '91079000304465',
              isNonReturnable: false
            }
          }
        },
        99108: {
          skuId: '99108',
          displayName:
            'USDA Prime Filet Mignon | 4 filets | 8 oz ea | 2" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000305240',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
          },
          skuOptions: null,
          skuDetails: {
            // hasStock: false,
            hasStock: true,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'In Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$209.95',
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
                availableStock: 304,
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
                optionValue: '8 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '2" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '5.0',
              barcode: '91079000305240',
              isNonReturnable: false
            }
          }
        },
        99121: {
          skuId: '99121',
          displayName:
            'USDA Prime Filet Mignon | 8 filets | 6 oz ea | 1.75" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000306063',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
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
                price: '$289.95',
                isDateRangePriceEnabled: false,
                isVolumePriceEnabled: false,
                isBulkPriceEnabled: false,
                isTieredPriceEnabled: false,
                volumePrices: null
              },
              salePrice: {
                price: '$90.78',
                isDateRangePriceEnabled: false,
                isVolumePriceEnabled: false,
                isBulkPriceEnabled: false,
                isTieredPriceEnabled: true,
                volumePrices: null
              }
            },
            inventory: [
              {
                locationId: '20',
                inventoryStatusLabel: 'In Stock',
                availableStock: 182,
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
                optionValue: '6 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '1.75" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '7.0',
              barcode: '91079000306063',
              isNonReturnable: false
            }
          }
        },
        99127: {
          skuId: '99127',
          displayName:
            'USDA Prime Filet Mignon | 4 filets | 10 oz ea | 2" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000306438',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
          },
          skuOptions: null,
          skuDetails: {
            hasStock: false,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'Out Of Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$249.95',
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
                inventoryStatusLabel: 'Out Of Stock',
                availableStock: 0,
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
                optionValue: '10 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '2" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '2.0',
              barcode: '91079000306438',
              isNonReturnable: false
            }
          }
        },
        99130: {
          skuId: '99130',
          displayName:
            'USDA Prime Filet Mignon | 8 filets | 10 oz ea | 2" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000306643',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
          },
          skuOptions: null,
          skuDetails: {
            hasStock: false,
            hasPrice: true,
            onSale: false,
            inventoryStatusLabel: 'Out Of Stock',
            price: {
              priceGroupId: 'AB_USD_1000',
              listPrice: {
                price: '$484.95',
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
                inventoryStatusLabel: 'Out Of Stock',
                availableStock: 0,
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
                optionValue: '10 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '2" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '1.0',
              barcode: '91079000306643',
              isNonReturnable: false
            }
          }
        },
        99132: {
          skuId: '99132',
          displayName: 'USDA Prime Filet Mignon | 8 filets | 8 oz ea',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000306766',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
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
                price: '$389.95',
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
                availableStock: 152,
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
                optionValue: '8 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '\\| Approx.  2" Thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '4.0',
              barcode: '91079000306766',
              isNonReturnable: false
            }
          }
        },
        99295: {
          skuId: '99295',
          displayName:
            'USDA Prime Filet Mignon | 4 filets | 5 oz ea | 1.5" thick',
          longDisplayName: null,
          description: null,
          longDescription: null,
          creationDate: null,
          mfgPartNumber: null,
          upc: '91079000315836',
          active: true,
          isClearance: false,
          maxQtyAllowedPerOrder: '0',
          returnDays: null,
          media: {
            smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
            videoHtmls: [''],
            altText: 'USDA Prime Filet Mignon',
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
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
                price: '$134.95',
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
                availableStock: 1160,
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
                optionValue: '5 oz',
                optionName: 'Weight'
              }
            ],
            additionalDetails: {
              isDiscountable: true,
              isSoldAsPackage: true,
              thickness: '1.5" thick',
              isConfigurable: false,
              onSale: false,
              skuType: 'products',
              priority: '11.0',
              barcode: '91079000315836',
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
            associatedSkuIds: ['98426', '98114', '98586']
          },
          {
            optionValue: '4 pcs',
            associatedSkuIds: ['99295', '98580', '99108', '99127']
          },
          {
            optionValue: '8 pcs',
            associatedSkuIds: ['99095', '99130', '99121', '99132']
          }
        ],
        Weight: [
          {
            optionValue: '5 oz',
            associatedSkuIds: ['99095', '99295'],
            skuId: '99295',
            hasStock: false,
            // hasStock: true,
            thickness: '1.5" thick'
          },
          {
            optionValue: '6 oz',
            associatedSkuIds: ['98580', '98426', '99121'],
            skuId: '98580',
            hasStock: false,
            // hasStock: true,
            thickness: '1.75" thick'
          },
          {
            optionValue: '8 oz',
            associatedSkuIds: ['99108', '98586', '99132'],
            skuId: '99108',
            hasStock: false,
            // hasStock: true,
            thickness: '2" thick'
          },
          {
            optionValue: '10 oz',
            associatedSkuIds: ['99130', '98114', '99127'],
            skuId: '99127',
            hasStock: false,
            thickness: '2" thick'
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
        minListPrice: 89.95,
        maxListPrice: 484.95,
        minSalePrice: 90.78,
        maxSalePrice: 90.78,
        listPriceRange: '$89.95-$484.95',
        salePriceRange: '$90.78',
        onSale: true,
        hasPrice: true,
        canAllowPurchaseInqry: false
      },
      defaultSkuId: '99127',
      hasStock: true,
      hasPrice: true,
      isAccessory: false,
      hazmat: false,
      restricted: false,
      additionalDetails: {
        nutritionalInfo:
          '<div class="row">\n<div class="col-md-6"><img loading="lazy" alt="Nutrition label" src="/dam/AB/storefront/general/98050.png" /></div>\n</div>',
        isGuideline: false,
        isDiscountable: true,
        isNeverFrozen: false,
        nutritionalInfoImages: ['/file/general/98050.png'],
        isNonReturnable: false,
        productCategory: 'USDA PRIME',
        facebookFeedProductCategory: 'food & beverages > food > meat & seafood',
        googleFeedProductCategory:
          'Food, Beverages & Tobacco > Food Items > Meat, Seafood & Eggs > Meat',
        nutritionalInfoContent: [
          '{"ID_PROD":"10001","PrdImg_ID":"98050","ServingSize":"1 fillet(170g)","Calories":"240","Fat_gm":"10","Fat_percent":"12","SaturatedFat_gm":"3.5","SaturatedFat_percent":"17","TransFat_gm":"0.5","Cholesterol_gm":"105","Cholesterol_percent":"35","Sodium_gm":"75","Sodium_percent":"3","TotalCarb_gm":"0","TotalCarb_percent":"0","DieteryFiber_gm":"0","DieteryFiber_percent":"0","TotalSugar_gm":"0","AddedSugar_gm":"0","AddedSugar_percent":"0","Protein_gm":"37","VitD_mcg":"0","VitD_percent":"0","Calcium_mg":"22","Calcium_percent":"0","Iron_mg":"4","Iron_percent":"25","Potassium_mg":"491","Potassium_percent":"10","Ingredients":"Beef","Servings":"variable","Protein_percent":null,"Calories_from_fat":null,"Polysaturated_fat":null,"Monosaturated_fat":null,"Sugar_alcohol":null,"Vitamin_A":null,"Vitamin_C":null}'
        ],
        isNewProduct: false,
        isPrimeProduct: true,
        isShippable: true
      },
      productDetails: {
        productMedia: {
          default: {
            media: {
              smallImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
              largeImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
              thumbnailImg: '/dam/AB/catalog/images/product/AB-FC-S19-lg.jpg',
              videoHtmls: [''],
              altText: 'USDA Prime Filet Mignon'
            },
            alternateImages: [
              {
                smallImg: '/dam/AB/catalog/images/product/10002.jpg',
                largeImg: '/dam/AB/catalog/images/product/10002.jpg',
                thumbnailImg: '/dam/AB/catalog/images/product/10002.jpg'
              }
            ]
          }
        },
        productAssociations: {
          3007: ['10373', '10632'],
          cooking_guides: ['69']
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
                '2 pcs',
                '16 pcs',
                '48 pcs',
                '12-24 pcs',
                '18 pcs',
                '30 pcs',
                '32 pcs',
                '3 pcs',
                '25 pcs',
                '12 pcs',
                '7-11 pcs',
                '36 pcs',
                '1 pc',
                '20 pcs',
                '4 pcs',
                '24-48 pcs',
                '24 pcs',
                '8 pcs',
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
                '3 lbs',
                '6-7 oz',
                '22 oz',
                '26 oz',
                '2.6 oz',
                '3.9 oz',
                '.4 oz',
                '3-4 oz',
                '9 oz',
                '32 oz',
                '5-6 oz',
                '1 oz',
                '30-34 oz',
                '16-20 oz',
                '5 oz',
                '14-18 oz',
                '9-10 oz',
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
                '6 lbs',
                '20 oz',
                '12-17 oz',
                '.75 oz',
                '2.25 oz',
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
          id: 'filet-mignon',
          displayName: 'Filet Mignon'
        },
        isGiftItem: false
      },
      associatedWarrantyIds: null,
      breadcrumbs: ['beef', 'beef-cut', 'filet-mignon'],
      seoData: {
        keywords: [],
        title: 'USDA Prime Filet Mignon | Allen Brothers',
        description:
          'Shop high-quality USDA Prime Filet Mignon: Complete-Trim., It is completely trimmed of exterior fat and slowly-wet aged for the very best flavor and texture.',
        slug: 'usda-prime-filet-mignon-complete-trim'
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
