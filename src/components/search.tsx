'use client'
import { SanityClient } from '@/sanity/sanity.client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
interface SearchResult {
    _id: string;
    name: string;
    description?: string;
    slug: {
      current: string;
    };
  }
  
  

  // lib/queries.ts
  export const searchQuery = `
    *[_type == "product"] {_id,name,description,slug {current}
    }
  `;
  export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [debouncedValue] = useDebounce(searchTerm, 500);
  
    const handleSearch = async (searchValue: string) => {
      if (!searchValue.trim()) {
        setResults([]);
        return;
      }
  
      try {
        setLoading(true);
        const searchResults = await SanityClient.fetch(searchQuery, {searchQuery: `*${searchValue}*` });
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };
  
    // Effect to handle debounced search
    useEffect(() => {
      handleSearch(debouncedValue);
    }, [debouncedValue]);
  
    return (
      <div className="w-full mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search food..."
            className="w-[100px] text-[20px] px-4 py-2 h-[40px] border rounded-xl border-gray-300 rounded-lg focus:outline-none f"
          />
          {loading && (
            <div className="absolute right-3 top-2">
              Loading...
            </div>
          )}
        </div>
  
        {results.length > 0 && (
          <div className="mt-4 bg-white shadow-lg rounded-lg">
            {results.map((result) => (
              <div
                key={result._id}
                className="p-4 border-b border-gray-100 last:border-0"
              >
                <h3 className="text-lg font-medium">
                  <Link href={`/product/${result.slug.current}`}>
                    <h1 className="hover:text-orange-600">{result.name}</h1>
                  </Link>
                </h3>
                {result.description && (
                  <p className="mt-1 text-gray-600">{result.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  // const SearchBar = () => {
  //   const [query, setQuery] = useState('');
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [products, setProducts] = useState<Product[]>([]);
  
  //   const handleSearch = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (!query.trim()) {
  //       setProducts([]);
  //       return;
  //     }
  
  //     setIsLoading(true);
  //     try {
  //       // GROQ query specifically for products
  //       const searchQuery = `
  //         *[_type == "product" && (
  //           name match $query + "*" ||
  //           description match $query + "*"
  //         )] {
  //           _id,
  //           name,
  //           price,
  //           description,
  //           "slug": slug.current,
  //           image {
  //             asset-> {
  //               _ref,
  //               url
  //             }
  //           }
  //         }[0...6]
  //       `;
  
  //       const searchResults = await SanityClient.fetch<Product[]>(searchQuery, {
  //         query: query.toLowerCase(),
  //       });
  
  //       setProducts(searchResults);
  //     } catch (error) {
  //       console.error('Search error:', error);
  //       setProducts([]);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  
  //   return (
  //     <div className="relative max-w-xl w-full">
  //       <form onSubmit={handleSearch} className="mb-4">
  //         <div className="relative flex items-center">
  //           <input
  //             type="search"
  //             value={query}
  //             onChange={(e) => setQuery(e.target.value)}
  //             placeholder="Search products..."
  //             className="w-full px-4 py-2 pl-10 text-sm border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
  //           />
  //           <Search 
  //             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
  //             size={18}
  //           />
  //           <button
  //             type="submit"
  //             disabled={isLoading}
  //             className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
  //           >
  //             {isLoading ? 'Searching...' : 'Search'}
  //           </button>
  //         </div>
  //       </form>
  
  //       {/* Product Results */}
  //       {products.length > 0 && (
  //         <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
  //           {products.map((product) => (
  //             <Link 
  //               href={`/products/${product.slug.current}`} 
  //               key={product._id}
  //               className="block"
  //             >
  //               <div className="flex items-center p-4 border-b last:border-b-0 hover:bg-gray-50">
  //                 {product.image && (
  //                   <div className="w-16 h-16 relative mr-4">
  //                     <Image
  //                       src={product.image.asset.url}
  //                       alt={product.name}
  //                       fill
  //                       className="object-cover rounded"
  //                     />
  //                   </div>
  //                 )}
  //                 <div className="flex-1">
  //                   <h3 className="font-medium text-gray-900">{product.name}</h3>
  //                   {product.description && (
  //                     <p className="text-sm text-gray-600 mt-1 line-clamp-1">
  //                       {product.description}
  //                     </p>
  //                   )}
  //                   <p className="text-sm font-medium text-green-600 mt-1">
  //                     ${product.price.toFixed(2)}
  //                   </p>
  //                 </div>
  //               </div>
  //             </Link>
  //           ))}
  //         </div>
  //       )}
  
  //       {query && products.length === 0 && !isLoading && (
  //         <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10 p-4 text-center text-gray-500">
  //           No products found
  //         </div>
  //       )}
  //     </div>
  //   );
  // };
  
  // export default SearchBar;

  // interface SearchResult {
  //   _id: string;
  //   title: string;
  //   description?: string;
  //   slug?: {
  //     current: string;
  //   };
  // }
  
  // const SearchBar = () => {
  //   const [query, setQuery] = useState('');
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [results, setResults] = useState<SearchResult[]>([]);
  
  //   const handleSearch = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (!query.trim()) {
  //       setResults([]);
  //       return;
  //     }
  
  //     setIsLoading(true);
  //     try {
  //       // GROQ query to search across multiple fields
  //       const searchQuery = `
  //         *[_type == "product" && (
  //           title match $query + "*" ||
  //           description match $query + "*" ||
  //           body[] {
  //             ...,
  //             children[] {
  //               text match $query + "*"
  //             }
  //           }
  //         )] {
  //           _id,
  //           title,
  //           description,
  //           "slug": slug.current,
  //         }[0...10]
  //       `;
  
  //       const searchResults = await SanityClient.fetch<SearchResult[]>(searchQuery, {
  //         querys: query.toLowerCase(),
  //       });
  
  //       setResults(searchResults);
  //     } catch (error) {
  //       console.error('Search error:', error);
  //       setResults([]);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  
  //   return (
  //     <div className="relative max-w-xl w-full">
  //       <form onSubmit={handleSearch} className="mb-4">
  //         <div className="relative flex items-center">
  //           <input
  //             type="search"
  //             value={query}
  //             onChange={(e) => setQuery(e.target.value)}
  //             placeholder="Search posts..."
  //             className="w-full px-4 py-2 pl-10 text-sm border rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
  //           />
  //           <Search 
  //             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
  //             size={18}
  //           />
  //           <button
  //             type="submit"
  //             disabled={isLoading}
  //             className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
  //           >
  //             {isLoading ? 'Searching...' : 'Search'}
  //           </button>
  //         </div>
  //       </form>
  
  //       {/* Search Results */}
  //       {results.length > 0 && (
  //         <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
  //           {results.map((result) => (
  //             <div
  //               key={result._id}
  //               className="p-4 border-b last:border-b-0 hover:bg-gray-50"
  //             >
  //               <h3 className="font-medium">{result.title}</h3>
  //               {result.description && (
  //                 <p className="text-sm text-gray-600 mt-1">{result.description}</p>
  //               )}
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   );
  // };
  
  // export default SearchBar;
  
  

  // // lib/queries.ts
  // export const searchQuery = `
  //   *[_type == "product"] {_id,name,description,slug {current}
  //   }
  // `;
  // export default function SearchBar() {
  //   const [text, setText] = useState('');
  //   const [debouncedText] = useDebounce(text, 1000);
  //   const [results, setResults] = useState([]);
  //   const [loading, setLoading] = useState(false);
  
  //   const handleSearch = async (searchValue:any) => {
  //     try {
  //       setLoading(true);
  //       const searchResults = await SanityClient.fetch(searchQuery, {
  //         searchQuery: `*${searchValue}*`
  //       });
  //       setResults(searchResults);
  //     } catch (error) {
  //       console.error('Search error:', error);
  //       setResults([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   useEffect(() => {
  //     handleSearch(debouncedText);
  //   }, [debouncedText]);
  
  //   return (
  //    <div>
  //    <div className="w-full max-w-xl mx-auto">
  //       <div className="relative">
  //         <input
  //           type="text"
  //           value={text}
  //           onChange={(e) => setText(e.target.value)}
  //           placeholder="Search "
  //           className="w-[100px] text-[10px] px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  //         />
  //         {loading && (
  //           <div className="absolute right-3 top-2">
  //             Loading...
  //           </div>
  //         )}
  //       </div>
  
  //       {results.length > 1 && (
  //         <div className="mt-4 bg-white shadow-lg rounded-lg h-[100px]">
  //           {results.map((result:any) => (
  //             <div
  //               key={result._id}
  //               className="p-4 border-b border-gray-100 last:border-0"
  //             >
  //               <h3 className="text-lg font-medium">
  //                 <Link href={`/product/${result.slug.current}`}>
  //                   <h1 className="hover:text-orange-600">{result.name}</h1>
  //                 </Link>
  //               </h3>
              
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //     </div>

  //    </div>
  //   );
  // }
  

 
//   'use client'
// import sanityClient, { SanityClient } from '@/sanity/sanity.client';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { useDebounce } from 'use-debounce';
// interface SearchResult {
//     _id: string;
//     name: string;
//     description?: string;
//     slug: {
//       current: string;
//     };
//   }
  
  

//   // lib/queries.ts
//   export const searchQuery = `
//     *[_type == "food"] {_id,name,description,slug {current}
//     }
//   `;
//   export default function SearchBar() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [results, setResults] = useState<SearchResult[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [debouncedValue] = useDebounce(searchTerm, 500);
  
//     const handleSearch = async (searchValue: string) => {
//       if (!searchValue.trim()) {
//         setResults([]);
//         return;
//       }
  
//       try {
//         setLoading(true);
//         const searchResults = await sanityClient.fetch(searchQuery, {
//           searchQuery: *${searchValue}*
//         });
//         setResults(searchResults);
//       } catch (error) {
//         console.error('Search error:', error);
//         setResults([]);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     // Effect to handle debounced search
//     useEffect(() => {
//       handleSearch(debouncedValue);
//     }, [debouncedValue]);
  
//     return (
//       <div className="w-full max-w-xl mx-auto">
//         <div className="relative">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search posts..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {loading && (
//             <div className="absolute right-3 top-2">
//               Loading...
//             </div>
//           )}
//         </div>
  
//         {results.length > 0 && (
//           <div className="mt-4 bg-white shadow-lg rounded-lg">
//             {results.map((result) => (
//               <div
//                 key={result._id}
//                 className="p-4 border-b border-gray-100 last:border-0"
//               >
//                 <h3 className="text-lg font-medium">
//                   <Link href={/shops/${result.slug.current}}>
//                     <h1 className="hover:text-orange-600">{result.name}</h1>
//                   </Link>
//                 </h3>
//                 {result.description && (
//                   <p className="mt-1 text-gray-600">{result.description}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       </div>
//     );
//   }