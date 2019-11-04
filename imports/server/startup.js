import Songs from '../collections/songs';

// Insert a default song in db
Songs.upsert({
  name: 'Qismat',
  artist: 'Ammy Virk',
  writer: 'Jaani',
  runtime: 243,
  release: new Date('22 Jul 2017'),
}, {
  $set: {
    description: 'Qismat is a punjabi romanticized song reflecting the scarifices we make in love in order to win a perpetual fight against our destiny.',
    imageUrl: '/images/qismat-cover.jpg',
    lyrics: {
      orig: {
        lang: 'Punjabi',
        lines: ['ਕਿਸਮਤ ਬਦਲਦੀ ਵੇਖੀ ਮੈਂ', 'ਏਹੇ ਜਗ ਬਦਲਦਾ ਵੇਖਿਆ', 'ਮੈਂ ਬਦਲਦੇ ਵੇਖੇ ਅਪਣੇ', 'ਮੈਂ ਰੱਬ ਬਦਲਦਾ ਵੇਖਿਆ', '', 'ਕਿਸਮਤ ਬਦਲਦੀ ਵੇਖੀ ਮੈਂ', 'ਏਹੇ ਜਗ ਬਦਲਦਾ ਵੇਖਿਆ', 'ਮੈਂ ਬਦਲਦੇ ਵੇਖੇ ਅਪਣੇ', 'ਮੈਂ ਰੱਬ ਬਦਲਦਾ ਵੇਖਿਆ', '', 'ਸਬ ਕੁੱਝ ਬਦਲ ਗਿਆ ਮੇਰਾ', 'ਸਬ ਕੁੱਝ ਬਦਲ ਗਿਆ ਮੇਰਾ', 'ਚੱਲ, ਜਰ ਹੀ ਜਾਵਾਂਗੀ', '', 'ਵੇ, ਜੇ ਹੁਣ ਤੂੰ ਵੀ ਬਦਲ ਗਿਆ ਮੈਂ ਤੇ', 'ਵੇ, ਜੇ ਹੁਣ ਤੂੰ ਵੀ ਬਦਲ ਗਿਆ ਮੈਂ ਤੇ ਮਰ ਹੀ ਜਾਵਾਂਗੀ', 'ਵੇ, ਜੇ ਹੁਣ ਤੂੰ ਵੀ ਬਦਲ ਗਿਆ ਮੈਂ ਤੇ ਮਰ ਹੀ ਜਾਵਾਂਗੀ', 'ਵੇ, ਜੇ ਹੁਣ ਤੂੰ ਵੀ ਬਦਲ ਗਿਆ ਮੈਂ ਤੇ ਮਰ ਹੀ ਜਾਵਾਂਗੀ', '', 'ਕਿਸਮਤ ਬਦਲਦੀ ਵੇਖੀ ਮੈਂ', 'ਏਹੇ ਜਗ ਬਦਲਦਾ ਵੇਖਿਆ', 'ਮੈਂ ਬਦਲਦੇ ਵੇਖੇ ਅਪਣੇ', 'ਮੈਂ ਰੱਬ ਬਦਲਦਾ ਵੇਖਿਆ', '', 'ਤੂੰ ਆਖਰੀ ਉਮੀਦ ਮੇਰੀ, ਟੁੱਟ ਕਿੱਤੇ ਜਾਵੀ ਨਾ', 'ਲੁੱਟੀ ਹੋਈ ਨੂੰ ਵੇ, Jaani, ਲੁੱਟ ਕਿੱਤੇ ਜਾਵੀ ਨਾ', 'ਤੂੰ ਆਖਰੀ ਉਮੀਦ ਮੇਰੀ, ਟੁੱਟ ਕਿੱਤੇ ਜਾਵੀ ਨਾ', 'ਲੁੱਟੀ ਹੋਈ ਨੂੰ ਵੇ, Jaani, ਲੁੱਟ ਕਿੱਤੇ ਜਾਵੀ ਨਾ', '', 'ਮੈਂ ਝੂਠ ਬਦਲਦਾ ਵੇਖਿਆ', 'ਮੈਂ ਸੱਚ ਬਦਲਦਾ ਵੇਖਿਆ', 'ਮੈਂ ਬਦਲਦੇ ਪੱਥਰ ਵੇਖੇ ਨੇ', 'ਮੈਂ ਕੱਚ ਬਦਲਦਾ ਵੇਖਿਆ', '', 'ਸਬ ਕੁੱਝ ਬਦਲ ਗਿਆ ਮੇਰਾ', 'ਸਬ ਕੁੱਝ ਬਦਲ ਗਿਆ ਮੇਰਾ', 'ਚੱਲ, ਜਰ ਹੀ ਜਾਵਾਂਗੀ', '', 'ਵੇ, ਜੇ ਹੁਣ ਤੂੰ ਵੀ ਬਦਲ ਗਿਆ ਮੈਂ ਤੇ ਮਰ ਹੀ ਜਾਵਾਂਗੀ', 'ਵੇ, ਜੇ ਹੁਣ ਤੂੰ ਵੀ ਬਦਲ ਗਿਆ ਮੈਂ ਤੇ ਮਰ ਹੀ ਜਾਵਾਂਗੀ', '', 'ਕਿਸਮਤ ਬਦਲਦੀ ਵੇਖੀ ਮੈਂ', 'ਏਹੇ ਜਗ ਬਦਲਦਾ ਵੇਖਿਆ', 'ਮੈਂ ਬਦਲਦੇ ਵੇਖੇ ਅਪਣੇ', 'ਮੈਂ ਰੱਬ ਬਦਲਦਾ ਵੇਖਿਆ', '', 'ਜੇ ਲੋੜ ਨ੍ਹੀ ਐ ਹੁਣ ਮੇਰੀ, ਮੂੰਹ ਤੇ ਮੇਰੇ ਬੋਲ ਵੇ', 'ਮਾੰਗ ਨਾ ਸਲਾਹਾਂ ਜਾਕੇ ਪਰਲੋਕਾਂ ਕੋਲ ਵੇ', 'ਜੇ ਦੇਣਾ ਐ, ਤੇ ਦਿਲ ਨਾਲ ਸਾਥ ਦੇਵੀਂ ਮੇਂਰਾ ਤੂੰ', 'ਜੇ ਰੋਲਣਾ ਵੀ ਐ, ਤੇ ਫੇਰ ਚੰਗੀ ਤਰ੍ਹਾ ਰੋਲ ਵੇ', '', 'ਮੈਂ ਚੰਨ ਬਦਲਦਾ ਵੇਖਿਆ', 'ਤਾਰੇ ਬਦਲਦੇ ਵੇਖੇ ਮੈਂ', "ਹਾਏ! ਲੋੜ ਪੈਣ ਤੇ ਦੁਨੀਆ 'ਚ", 'ਸਾਰੇ ਬਦਲਦੇ ਵੇਖੇ ਮੈਂ', '', 'ਸਬ ਕੁੱਝ ਬਦਲ ਗਿਆ ਮੇਰਾ', 'ਸਬ ਕੁੱਝ ਬਦਲ ਗਿਆ ਮੇਰਾ', 'ਚੱਲ, ਜਰ ਹੀ ਜਾਵਾਂਗੀ', '', 'ਵੇ, ਜੇ ਹੁਣ ਤੂੰ ਵੀ ਬਦਲ ਗਿਆ ਮੈਂ ਤੇ ਮਰ ਹੀ ਜਾਵਾਂਗੀ', 'ਵੇ, ਜੇ ਹੁਣ ਤੂੰ ਵੀ ਬਦਲ ਗਿਆ ਮੈਂ ਤੇ ਮਰ ਹੀ ਜਾਵਾਂਗੀ', 'ਵੇ, ਜੇ ਹੁਣ ਤੂੰ ਵੀ ਬਦਲ ਗਿਆ ਮੈਂ ਤੇ ਮਰ ਹੀ ਜਾਵਾਂਗੀ'],
      },
      translated: {
        lang: 'English',
        lines: ['I have seen the fate changing', 'Have seen the world changing', 'I have seen my beloved ones changing', 'And did God changing as well', '', 'I have seen the fate changing', 'Have seen the world changing', 'I have seen my beloved ones changing', 'And did God changing as well', '', 'My everything have changed', 'My everything have changed', 'Well I will bear all this', '', 'But if even you change', 'But if even you change, I shall die', 'But if even you change, I shall die', 'But if even you change, I shall die', '', 'I have seen the fate changing', 'Have seen the world changing', 'I have seen my beloved ones changing', 'And did God changing as well', '', "You're my last hope, don't break it down", "I'm already devastated Jaani, don't try to robb me", "You're my last hope, don't break it down", "I'm already devastated Jaani, don't try to robb me", '', 'I have seen the lies being altered', 'I have seen the truth being modfied', 'I have seen the rocks shifting', 'And have seen the transforming glass as well', '', 'My everything have changed', 'My everything have changed', 'Well I will bear all this', '', 'But if even you change, I shall die', 'But if even you change, I shall die', '', 'I have seen the fate changing', 'Have seen the world changing', 'I have seen my beloved ones changing', 'And did God changing as well', '', "If you don't need me anymore, tell it while facing me", "Don't ask for advises from outsiders", 'If you want to give me your heart also support me, company me', 'If you wish to crush me, you are welcome to do it with all your heart', '', 'I have seen the moon varying', 'Have seen the stars varying', 'Oh in the most required times in the world', 'Everybody changed, I have seen', '', 'My everything have changed', 'My everything have changed', 'Well I will bear all this', '', 'But if even you change, I shall die', 'But if even you change, I shall die', 'But if even you change, I shall die'],
      },
    },
  },
});
