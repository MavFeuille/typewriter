const sentence = "hello there from lighthouselabs";

const stringAnime = function(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
      console.log(sentence[i]);

      if (i === sentence.length - 1) {
        process.stdout.write('\n');
      }
    }, i * 50);
  }
};

stringAnime(sentence);

