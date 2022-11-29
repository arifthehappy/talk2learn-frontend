export const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function getNameInitials(name) {
  const splitName = name.toUpperCase().split(" ");

  if (splitName.length > 1) {
    return splitName[0][0] + splitName[1][0];
  }
  return splitName[0][0];
}

export function transformToArr(snapVal) {
  return snapVal ? Object.keys(snapVal) : [];
}

export function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map((roomId) => {
        return { ...snapVal[roomId], id: roomId };
      })
    : [];
}

export const languagesData = [
  {
    label: "English",
    value: "English",
  },
  {
    label: "Afar",
    value: "Afar",
  },
  {
    label: "Abkhazian",
    value: "Abkhazian",
  },
  {
    label: "Avestan",
    value: "Avestan",
  },
  {
    label: "Afrikaans",
    value: "Afrikaans",
  },
  {
    label: "Akan",
    value: "Akan",
  },
  {
    label: "Amharic",
    value: "Amharic",
  },
  {
    label: "Aragonese",
    value: "Aragonese",
  },
  {
    label: "Arabic",
    value: "Arabic",
  },
  {
    label: "Assamese",
    value: "Assamese",
  },
  {
    label: "Avaric",
    value: "Avaric",
  },
  {
    label: "Aymara",
    value: "Aymara",
  },
  {
    label: "Azerbaijani",
    value: "Azerbaijani",
  },
  {
    label: "Bashkir",
    value: "Bashkir",
  },
  {
    label: "Belarusian",
    value: "Belarusian",
  },
  {
    label: "Bulgarian",
    value: "Bulgarian",
  },
  {
    label: "Bihari languages",
    value: "Bihari languages",
  },
  {
    label: "Bislama",
    value: "Bislama",
  },
  {
    label: "Bambara",
    value: "Bambara",
  },
  {
    label: "Bengali",
    value: "Bengali",
  },
  {
    label: "Tibetan",
    value: "Tibetan",
  },
  {
    label: "Breton",
    value: "Breton",
  },
  {
    label: "Bosnian",
    value: "Bosnian",
  },
  {
    label: "Catalan",
    value: "Catalan",
  },
  {
    label: "Chechen",
    value: "Chechen",
  },
  {
    label: "Chamorro",
    value: "Chamorro",
  },
  {
    label: "Corsican",
    value: "Corsican",
  },
  {
    label: "Cree",
    value: "Cree",
  },
  {
    label: "Czech",
    value: "Czech",
  },
  {
    label: "Church Slavic;",
    value: "Church Slavic;",
  },
  {
    label: "Chuvash",
    value: "Chuvash",
  },
  {
    label: "Welsh",
    value: "Welsh",
  },
  {
    label: "Danish",
    value: "Danish",
  },
  {
    label: "German",
    value: "German",
  },
  {
    label: "Divehi",
    value: "Divehi",
  },
  {
    label: "Dzongkha",
    value: "Dzongkha",
  },
  {
    label: "Ewe",
    value: "Ewe",
  },
  {
    label: "Greek",
    value: "Greek",
  },
  {
    label: "Esperanto",
    value: "Esperanto",
  },
  {
    label: "Spanish",
    value: "Spanish",
  },
  {
    label: "Estonian",
    value: "Estonian",
  },
  {
    label: "Basque",
    value: "Basque",
  },
  {
    label: "Persian",
    value: "Persian",
  },
  {
    label: "Fulah",
    value: "Fulah",
  },
  {
    label: "Finnish",
    value: "Finnish",
  },
  {
    label: "Fijian",
    value: "Fijian",
  },
  {
    label: "Faroese",
    value: "Faroese",
  },
  {
    label: "French",
    value: "French",
  },
  {
    label: "Western Frisian",
    value: "Western Frisian",
  },
  {
    label: "Irish",
    value: "Irish",
  },
  {
    label: "Gaelic",
    value: "Gaelic",
  },
  {
    label: "Galician",
    value: "Galician",
  },
  {
    label: "Guarani",
    value: "Guarani",
  },
  {
    label: "Gujarati",
    value: "Gujarati",
  },
  {
    label: "Manx",
    value: "Manx",
  },
  {
    label: "Hausa",
    value: "Hausa",
  },
  {
    label: "Hebrew",
    value: "Hebrew",
  },
  {
    label: "Hindi",
    value: "Hindi",
  },
  {
    label: "Hiri Motu",
    value: "Hiri Motu",
  },
  {
    label: "Croatian",
    value: "Croatian",
  },
  {
    label: "Haitian",
    value: "Haitian",
  },
  {
    label: "Hungarian",
    value: "Hungarian",
  },
  {
    label: "Armenian",
    value: "Armenian",
  },
  {
    label: "Herero",
    value: "Herero",
  },
  {
    label: "Interlingua",
    value: "Interlingua",
  },
  {
    label: "Indonesian",
    value: "Indonesian",
  },
  {
    label: "Interlingue",
    value: "Interlingue",
  },
  {
    label: "Igbo",
    value: "Igbo",
  },
  {
    label: "Sichuan Yi",
    value: "Sichuan Yi",
  },
  {
    label: "Inupiaq",
    value: "Inupiaq",
  },
  {
    label: "Ido",
    value: "Ido",
  },
  {
    label: "Icelandic",
    value: "Icelandic",
  },
  {
    label: "Italian",
    value: "Italian",
  },
  {
    label: "Inuktitut",
    value: "Inuktitut",
  },
  {
    label: "Japanese",
    value: "Japanese",
  },
  {
    label: "Javanese",
    value: "Javanese",
  },
  {
    label: "Georgian",
    value: "Georgian",
  },
  {
    label: "Kongo",
    value: "Kongo",
  },
  {
    label: "Kikuyu",
    value: "Kikuyu",
  },
  {
    label: "Kuanyama",
    value: "Kuanyama",
  },
  {
    label: "Kazakh",
    value: "Kazakh",
  },
  {
    label: "Kalaallisut",
    value: "Kalaallisut",
  },
  {
    label: "Central Khmer",
    value: "Central Khmer",
  },
  {
    label: "Kannada",
    value: "Kannada",
  },
  {
    label: "Korean",
    value: "Korean",
  },
  {
    label: "Kanuri",
    value: "Kanuri",
  },
  {
    label: "Kashmiri",
    value: "Kashmiri",
  },
  {
    label: "Kurdish",
    value: "Kurdish",
  },
  {
    label: "Komi",
    value: "Komi",
  },
  {
    label: "Cornish",
    value: "Cornish",
  },
  {
    label: "Kirghiz",
    value: "Kirghiz",
  },
  {
    label: "Latin",
    value: "Latin",
  },
  {
    label: "Luxembourgish",
    value: "Luxembourgish",
  },
  {
    label: "Ganda",
    value: "Ganda",
  },
  {
    label: "Limburgan",
    value: "Limburgan",
  },
  {
    label: "Lingala",
    value: "Lingala",
  },
  {
    label: "Lao",
    value: "Lao",
  },
  {
    label: "Lithuanian",
    value: "Lithuanian",
  },
  {
    label: "Luba-Katanga",
    value: "Luba-Katanga",
  },
  {
    label: "Latvian",
    value: "Latvian",
  },
  {
    label: "Malagasy",
    value: "Malagasy",
  },
  {
    label: "Marshallese",
    value: "Marshallese",
  },
  {
    label: "Maori",
    value: "Maori",
  },
  {
    label: "Macedonian",
    value: "Macedonian",
  },
  {
    label: "Malayalam",
    value: "Malayalam",
  },
  {
    label: "Mongolian",
    value: "Mongolian",
  },
  {
    label: "Marathi",
    value: "Marathi",
  },
  {
    label: "Malay",
    value: "Malay",
  },
  {
    label: "Maltese",
    value: "Maltese",
  },
  {
    label: "Burmese",
    value: "Burmese",
  },
  {
    label: "Nauru",
    value: "Nauru",
  },
  {
    label: "Bokmål",
    value: "Bokmål",
  },
  {
    label: "Nepali",
    value: "Nepali",
  },
  {
    label: "Ndonga",
    value: "Ndonga",
  },
  {
    label: "Dutch",
    value: "Dutch",
  },
  {
    label: "Norwegian Nynorsk",
    value: "Norwegian Nynorsk",
  },
  {
    label: "Norwegian",
    value: "Norwegian",
  },
  {
    label: "Ndebele",
    value: "Ndebele",
  },
  {
    label: "Navajo",
    value: "Navajo",
  },
  {
    label: "Chichewa",
    value: "Chichewa",
  },
  {
    label: "Occitan",
    value: "Occitan",
  },
  {
    label: "Ojibwa",
    value: "Ojibwa",
  },
  {
    label: "Oromo",
    value: "Oromo",
  },
  {
    label: "Oriya",
    value: "Oriya",
  },
  {
    label: "Ossetian",
    value: "Ossetian",
  },
  {
    label: "Panjabi",
    value: "Panjabi",
  },
  {
    label: "Pali",
    value: "Pali",
  },
  {
    label: "Polish",
    value: "Polish",
  },
  {
    label: "Pushto",
    value: "Pushto",
  },
  {
    label: "Portuguese",
    value: "Portuguese",
  },
  {
    label: "Quechua",
    value: "Quechua",
  },
  {
    label: "Romansh",
    value: "Romansh",
  },
  {
    label: "Rundi",
    value: "Rundi",
  },
  {
    label: "Romanian",
    value: "Romanian",
  },
  {
    label: "Russian",
    value: "Russian",
  },
  {
    label: "Kinyarwanda",
    value: "Kinyarwanda",
  },
  {
    label: "Sanskrit",
    value: "Sanskrit",
  },
  {
    label: "Sardinian",
    value: "Sardinian",
  },
  {
    label: "Sindhi",
    value: "Sindhi",
  },
  {
    label: "Northern Sami",
    value: "Northern Sami",
  },
  {
    label: "Sango",
    value: "Sango",
  },
  {
    label: "Sinhala",
    value: "Sinhala",
  },
  {
    label: "Slovak",
    value: "Slovak",
  },
  {
    label: "Slovenian",
    value: "Slovenian",
  },
  {
    label: "Samoan",
    value: "Samoan",
  },
  {
    label: "Shona",
    value: "Shona",
  },
  {
    label: "Somali",
    value: "Somali",
  },
  {
    label: "Albanian",
    value: "Albanian",
  },
  {
    label: "Serbian",
    value: "Serbian",
  },
  {
    label: "Swati",
    value: "Swati",
  },
  {
    label: "Sotho",
    value: "Sotho",
  },
  {
    label: "Sundanese",
    value: "Sundanese",
  },
  {
    label: "Swedish",
    value: "Swedish",
  },
  {
    label: "Swahili",
    value: "Swahili",
  },
  {
    label: "Tamil",
    value: "Tamil",
  },
  {
    label: "Telugu",
    value: "Telugu",
  },
  {
    label: "Tajik",
    value: "Tajik",
  },
  {
    label: "Thai",
    value: "Thai",
  },
  {
    label: "Tigrinya",
    value: "Tigrinya",
  },
  {
    label: "Turkmen",
    value: "Turkmen",
  },
  {
    label: "Tagalog",
    value: "Tagalog",
  },
  {
    label: "Tswana",
    value: "Tswana",
  },
  {
    label: "Tonga (Tonga Islands)",
    value: "Tonga (Tonga Islands)",
  },
  {
    label: "Turkish",
    value: "Turkish",
  },
  {
    label: "Tsonga",
    value: "Tsonga",
  },
  {
    label: "Tatar",
    value: "Tatar",
  },
  {
    label: "Twi",
    value: "Twi",
  },
  {
    label: "Tahitian",
    value: "Tahitian",
  },
  {
    label: "Uighur",
    value: "Uighur",
  },
  {
    label: "Ukrainian",
    value: "Ukrainian",
  },
  {
    label: "Urdu",
    value: "Urdu",
  },
  {
    label: "Uzbek",
    value: "Uzbek",
  },
  {
    label: "Venda",
    value: "Venda",
  },
  {
    label: "Vietnamese",
    value: "Vietnamese",
  },
  {
    label: "Volapük",
    value: "Volapük",
  },
  {
    label: "Walloon",
    value: "Walloon",
  },
  {
    label: "Wolof",
    value: "Wolof",
  },
  {
    label: "Xhosa",
    value: "Xhosa",
  },
  {
    label: "Yiddish",
    value: "Yiddish",
  },
  {
    label: "Yoruba",
    value: "Yoruba",
  },
  {
    label: "Zhuang",
    value: "Zhuang",
  },
  {
    label: "Chinese",
    value: "Chinese",
  },
  {
    label: "Zulu",
    value: "Zulu",
  },
];
