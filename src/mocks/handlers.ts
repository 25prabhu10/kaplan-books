import { rest } from 'msw'

export const handlers = [
  rest.get(
    'https://www.googleapis.com/books/v1/volumes',
    async (req, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          kind: 'books#volumes',
          totalItems: 1453,
          items: [
            {
              kind: 'books#volume',
              id: 'hRDADwAAQBAJ',
              etag: 'QgBvy9uLqMk',
              selfLink:
                'https://www.googleapis.com/books/v1/volumes/hRDADwAAQBAJ',
              volumeInfo: {
                title: 'Official Guide to OET',
                authors: ['Kaplan Test Prep'],
                publisher: 'Simon and Schuster',
                publishedDate: '2020-03-03',
                description:
                  "The Official Guide to OET is the first guide book endorsed by the test maker (CBLA) and is designed to prepare students for the updated OET exam. Kaplan Test Prep, the world leader in test preparation since 1938, has authored this book incorporating key test-taking tips and strategies. The practice questions have been reviewed by CBLA to ensure they are true to the test. Get familiar with the exam to help you face the OET with confidence. Test-like Listening tracks, realistic practice questions, and additional online resources give you everything you need to succeed on the OET. This book is suitable for both self-study and classroom use. To access your audio and online resources, first register online at kaptest.com/booksonline. Once you’ve registered, access your audio and resources at kaptest.com/login or download the Kaplan Mobile Prep app on Google Play or the App Store for your Android or iOS device Tips and Practice 1 full practice test Online audio for Listening content Skill-boosting activities for each of the subtests (Listening, Reading, Writing & Speaking Self-study tips Test Day advice Expert Guidance We know the test: The Kaplan team in conjunction with CBLA ensure our practice questions and study materials are true to the test Kaplan's books and practice questions are written by experts who know students—every explanation is written to help you learn We invented test prep—Kaplan (www.kaptestglobal.com) has been helping students for 80 years, and our proven strategies have helped legions of students achieve their dreams",
                industryIdentifiers: [
                  {
                    type: 'ISBN_13',
                    identifier: '9781506263236',
                  },
                  {
                    type: 'ISBN_10',
                    identifier: '1506263232',
                  },
                ],
                readingModes: {
                  text: true,
                  image: false,
                },
                pageCount: 252,
                printType: 'BOOK',
                categories: ['Foreign Language Study'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: true,
                contentVersion: '1.3.3.0.preview.2',
                panelizationSummary: {
                  containsEpubBubbles: false,
                  containsImageBubbles: false,
                },
                imageLinks: {
                  smallThumbnail:
                    'http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                  thumbnail:
                    'http://books.google.com/books/content?id=hRDADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                  'http://books.google.co.in/books?id=hRDADwAAQBAJ&pg=PP1&dq=kaplan+test+prep&hl=&cd=1&source=gbs_api',
                infoLink:
                  'https://play.google.com/store/books/details?id=hRDADwAAQBAJ&source=gbs_api',
                canonicalVolumeLink:
                  'https://play.google.com/store/books/details?id=hRDADwAAQBAJ',
              },
              saleInfo: {
                country: 'IN',
                saleability: 'FOR_SALE',
                isEbook: true,
                listPrice: {
                  amount: 1681.5,
                  currencyCode: 'INR',
                },
                retailPrice: {
                  amount: 1681.5,
                  currencyCode: 'INR',
                },
                buyLink:
                  'https://play.google.com/store/books/details?id=hRDADwAAQBAJ&rdid=book-hRDADwAAQBAJ&rdot=1&source=gbs_api',
                offers: [
                  {
                    finskyOfferType: 1,
                    listPrice: {
                      amountInMicros: 1681500000,
                      currencyCode: 'INR',
                    },
                    retailPrice: {
                      amountInMicros: 1681500000,
                      currencyCode: 'INR',
                    },
                  },
                ],
              },
              accessInfo: {
                country: 'IN',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
                epub: {
                  isAvailable: true,
                  acsTokenLink:
                    'http://books.google.co.in/books/download/Official_Guide_to_OET-sample-epub.acsm?id=hRDADwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
                },
                pdf: {
                  isAvailable: false,
                },
                webReaderLink:
                  'http://play.google.com/books/reader?id=hRDADwAAQBAJ&hl=&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
              },
              searchInfo: {
                textSnippet:
                  'The Official Guide to OET is the first guide book endorsed by the test maker (CBLA) and is designed to prepare students for the updated OET exam.',
              },
            },
            {
              kind: 'books#volume',
              id: 'Wl-2DwAAQBAJ',
              etag: 'j1SSHT2BX3I',
              selfLink:
                'https://www.googleapis.com/books/v1/volumes/Wl-2DwAAQBAJ',
              volumeInfo: {
                title: 'GMAT Prep Plus 2021',
                subtitle:
                  '6 Practice Tests + Proven Strategies + Online + Mobile',
                authors: ['Kaplan Test Prep'],
                publisher: 'Simon and Schuster',
                publishedDate: '2020-07-07',
                description:
                  "Always study with the most up-to-date prep! Look for GMAT Prep Plus 2022–2023, ISBN 9781506277233, on sale December 14, 2021. Publisher's Note: Products purchased from third-party sellers are not guaranteed by the publisher for quality, authenticity, or access to any online entitles included with the product.",
                industryIdentifiers: [
                  {
                    type: 'ISBN_13',
                    identifier: '9781506262383',
                  },
                  {
                    type: 'ISBN_10',
                    identifier: '1506262384',
                  },
                ],
                readingModes: {
                  text: true,
                  image: false,
                },
                pageCount: 1576,
                printType: 'BOOK',
                categories: ['Study Aids'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: true,
                contentVersion: '1.2.2.0.preview.2',
                panelizationSummary: {
                  containsEpubBubbles: false,
                  containsImageBubbles: false,
                },
                imageLinks: {
                  smallThumbnail:
                    'http://books.google.com/books/content?id=Wl-2DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                  thumbnail:
                    'http://books.google.com/books/content?id=Wl-2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                  'http://books.google.co.in/books?id=Wl-2DwAAQBAJ&pg=PP1&dq=kaplan+test+prep&hl=&cd=2&source=gbs_api',
                infoLink:
                  'http://books.google.co.in/books?id=Wl-2DwAAQBAJ&dq=kaplan+test+prep&hl=&source=gbs_api',
                canonicalVolumeLink:
                  'https://books.google.com/books/about/GMAT_Prep_Plus_2021.html?hl=&id=Wl-2DwAAQBAJ',
              },
              saleInfo: {
                country: 'IN',
                saleability: 'NOT_FOR_SALE',
                isEbook: false,
              },
              accessInfo: {
                country: 'IN',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
                epub: {
                  isAvailable: true,
                  acsTokenLink:
                    'http://books.google.co.in/books/download/GMAT_Prep_Plus_2021-sample-epub.acsm?id=Wl-2DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
                },
                pdf: {
                  isAvailable: false,
                },
                webReaderLink:
                  'http://play.google.com/books/reader?id=Wl-2DwAAQBAJ&hl=&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
              },
              searchInfo: {
                textSnippet:
                  'Always study with the most up-to-date prep! Look for GMAT Prep Plus 2022–2023, ISBN 9781506277233, on sale December 14, 2021.',
              },
            },
            {
              kind: 'books#volume',
              id: 'NYThDwAAQBAJ',
              etag: 'HQGuzvYbLVg',
              selfLink:
                'https://www.googleapis.com/books/v1/volumes/NYThDwAAQBAJ',
              volumeInfo: {
                title: 'GRE Prep Plus 2021',
                subtitle:
                  '6 Practice Tests + Proven Strategies + Online + Video + Mobile',
                authors: ['Kaplan Test Prep'],
                publisher: 'Kaplan Publishing',
                publishedDate: '2020-06-02',
                description:
                  "Kaplan's GRE Prep Plus 2021 guides you through the GRE step-by-step, with expert strategies, essential content review, and five online practice tests. Get an advantage on test day with our proven test-taking strategies, math skills review, and one-year access to online practice and lessons. We’re so certain that GRE Prep Plus 2021 offers all the knowledge you need to excel at the GRE that we guarantee it: After studying with the online resources and book, you'll score higher on the GRE—or you'll get your money back. The Best Practice Five full-length online tests help you practice in the same computer-based format you'll see on test day. One full-length practice test included in the book for easier reference and review. More than 1,700 questions with detailed explanations. Personalize your study plan with the individual performance summary you'll receive after each online practice test. Customize your practice with a 500-question online Qbank that lets you select problems by topic and difficulty. Chapters on each GRE question type and math skill, with practice sets for each. Questions have been reviewed, revised, and updated by Kaplan's expert faculty. Efficient Strategies and Expert Guidance Expert videos on stress-reduction techniques and study planning tactics that can help you ace the GRE. GRE Prep Plus 2021 comes with one-on-one academic support from Kaplan faculty via our Facebook page: facebook.com/KaplanGradPrep We know the test: The Kaplan team has spent years studying every GRE-related document available. Kaplan's experts ensure our practice questions and study materials are true to the test. We invented test prep—Kaplan (www.kaptest.com) has been helping students for 80 years. Our proven strategies have helped legions of students achieve their dreams. Want to boost your studies with even more online practice and in-depth GRE math and verbal workbooks? Try Kaplan's GRE Complete 2021.",
                industryIdentifiers: [
                  {
                    type: 'ISBN_13',
                    identifier: '9781506262437',
                  },
                  {
                    type: 'ISBN_10',
                    identifier: '1506262430',
                  },
                ],
                readingModes: {
                  text: false,
                  image: false,
                },
                pageCount: 709,
                printType: 'BOOK',
                categories: ['Study Aids'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: '0.1.1.0.preview.0',
                panelizationSummary: {
                  containsEpubBubbles: false,
                  containsImageBubbles: false,
                },
                imageLinks: {
                  smallThumbnail:
                    'http://books.google.com/books/content?id=NYThDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                  thumbnail:
                    'http://books.google.com/books/content?id=NYThDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                  'http://books.google.co.in/books?id=NYThDwAAQBAJ&printsec=frontcover&dq=kaplan+test+prep&hl=&cd=3&source=gbs_api',
                infoLink:
                  'http://books.google.co.in/books?id=NYThDwAAQBAJ&dq=kaplan+test+prep&hl=&source=gbs_api',
                canonicalVolumeLink:
                  'https://books.google.com/books/about/GRE_Prep_Plus_2021.html?hl=&id=NYThDwAAQBAJ',
              },
              saleInfo: {
                country: 'IN',
                saleability: 'NOT_FOR_SALE',
                isEbook: false,
              },
              accessInfo: {
                country: 'IN',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
                epub: {
                  isAvailable: false,
                },
                pdf: {
                  isAvailable: false,
                },
                webReaderLink:
                  'http://play.google.com/books/reader?id=NYThDwAAQBAJ&hl=&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
              },
              searchInfo: {
                textSnippet:
                  'The Best Practice Five full-length online tests help you practice in the same computer-based format you&#39;ll see on test day. One full-length practice test included in the book for easier reference and review.',
              },
            },
            {
              kind: 'books#volume',
              id: 'p2C2DwAAQBAJ',
              etag: '1ybsr56rESI',
              selfLink:
                'https://www.googleapis.com/books/v1/volumes/p2C2DwAAQBAJ',
              volumeInfo: {
                title: 'SAT Prep Plus 2021',
                subtitle: '5 Practice Tests + Proven Strategies + Online',
                authors: ['Kaplan Test Prep'],
                publisher: 'Simon and Schuster',
                publishedDate: '2020-06-02',
                description:
                  "Always study with the most up-to-date prep! Look for SAT Prep Plus 2022, ISBN 9781506277387, on sale June 01, 2021. Publisher's Note: Products purchased from third-party sellers are not guaranteed by the publisher for quality, authenticity, or access to any online entitles included with the product.",
                industryIdentifiers: [
                  {
                    type: 'ISBN_13',
                    identifier: '9781506262680',
                  },
                  {
                    type: 'ISBN_10',
                    identifier: '1506262686',
                  },
                ],
                readingModes: {
                  text: true,
                  image: false,
                },
                pageCount: 973,
                printType: 'BOOK',
                categories: ['Study Aids'],
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: true,
                contentVersion: '2.2.2.0.preview.2',
                panelizationSummary: {
                  containsEpubBubbles: false,
                  containsImageBubbles: false,
                },
                imageLinks: {
                  smallThumbnail:
                    'http://books.google.com/books/content?id=p2C2DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                  thumbnail:
                    'http://books.google.com/books/content?id=p2C2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'en',
                previewLink:
                  'http://books.google.co.in/books?id=p2C2DwAAQBAJ&pg=PP1&dq=kaplan+test+prep&hl=&cd=4&source=gbs_api',
                infoLink:
                  'http://books.google.co.in/books?id=p2C2DwAAQBAJ&dq=kaplan+test+prep&hl=&source=gbs_api',
                canonicalVolumeLink:
                  'https://books.google.com/books/about/SAT_Prep_Plus_2021.html?hl=&id=p2C2DwAAQBAJ',
              },
              saleInfo: {
                country: 'IN',
                saleability: 'NOT_FOR_SALE',
                isEbook: false,
              },
              accessInfo: {
                country: 'IN',
                viewability: 'PARTIAL',
                embeddable: true,
                publicDomain: false,
                textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
                epub: {
                  isAvailable: true,
                  acsTokenLink:
                    'http://books.google.co.in/books/download/SAT_Prep_Plus_2021-sample-epub.acsm?id=p2C2DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
                },
                pdf: {
                  isAvailable: false,
                },
                webReaderLink:
                  'http://play.google.com/books/reader?id=p2C2DwAAQBAJ&hl=&source=gbs_api',
                accessViewStatus: 'SAMPLE',
                quoteSharingAllowed: false,
              },
              searchInfo: {
                textSnippet:
                  'Always study with the most up-to-date prep! Look for SAT Prep Plus 2022, ISBN 9781506277387, on sale June 01, 2021.',
              },
            },
          ],
        })
      )
    }
  ),
]
