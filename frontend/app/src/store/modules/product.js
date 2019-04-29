const allProducts = [
  {
    id: 1,
    name: 'Team Fortress 2',
    price: '9.99€',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Hltob-win-cover.jpg/220px-Hltob-win-cover.jpg',
    description: `Team Fortress 2 (TF2) is a team-based multiplayer first-person shooter video game developed and published by Valve
                Corporation. It is the sequel to the 1996 mod Team Fortress for Quake and its 1999 remake, Team Fortress Classic. It
                was released as part of the video game bundle The Orange Box in October 2007 for Microsoft Windows and the Xbox
                360.<br><br>
                A PlayStation 3 version followed in December 2007. The game was released for Windows as a standalone entry in
                April
                2008 and was updated to support OS X in June 2010 and Linux in February 2013. It is distributed online through
                Valve's
                digital retailer Steam, with retail distribution being handled by Electronic Arts.`,
    category: 'fps',
  },
  {
    id: 2,
    name: 'Heroes of Might and Magic 3',
    price: '19.99€',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Homm3boxart.jpg/220px-Homm3boxart.jpg',
    description: `Heroes of Might and Magic III: The Restoration of Erathia (commonly referred to as Heroes of Might & Magic 3, or simply Heroes 3) is a turn-based strategy game developed by Jon Van Caneghem through New World Computing originally released for Microsoft Windows by the 3DO Company in 1999. Its ports to several computer and console systems followed in 1999-2000. It is the third installment of the Heroes of Might and Magic series. The game's story is first referenced throughout Might and Magic VI: The Mandate of Heaven and serves as a prequel to Might and Magic VII: For Blood and Honor. The player can choose to play through seven different campaigns telling the story, or play in a scenario against computer or human opponents.`,
    category: 'strategy',
  },
  {
    id: 3,
    name: 'Silver',
    price: '1.99€',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Silver_Coverart.png/220px-Silver_Coverart.png',
    description: `Silver, released in 1999, is an action RPG for Microsoft Windows, Dreamcast and OS X. The game was produced by Infogrames initially for Windows, and later on the Dreamcast. The story focuses around a young warrior called David and his quest to retrieve his wife from the clutches of the villain Silver. On his journey he gains a number of followers and visits many different landscapes. The game sold over 400,000 copies.`,
    category: 'rpg',
  },
  {
    id: 4,
    name: 'Defender',
    price: '0.99€',
    image: 'https://d1k5w7mbrh6vq5.cloudfront.net/images/cache/49/db/dd/49dbdd31c690e9e7fbe6dc9fb7cd9855.jpg',
    description: `Defender is an arcade video game developed and released by Williams Electronics in 1981. A horizontally scrolling shoot 'em up, the game is set on an unnamed planet where the player must defeat waves of invading aliens while protecting astronauts. Development was led by Eugene Jarvis, a pinball programmer at Williams; Defender was Jarvis' first video game project and drew inspiration from Space Invaders and Asteroids.`,
    category: 'indie',
  },
  {
    id: 5,
    name: 'Team Fortress 3',
    price: '19.99€',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Hltob-win-cover.jpg/220px-Hltob-win-cover.jpg',
    description: `Team Fortress 3 (TF3) is a team-based multiplayer first-person shooter video game developed and published by Valve
                Corporation. It is the sequel to the 1996 mod Team Fortress for Quake and its 1999 remake, Team Fortress Classic. It
                was released as part of the video game bundle The Orange Box in October 2007 for Microsoft Windows and the Xbox
                360.<br><br>
                A PlayStation 3 version followed in December 2007. The game was released for Windows as a standalone entry in
                April
                2008 and was updated to support OS X in June 2010 and Linux in February 2013. It is distributed online through
                Valve's
                digital retailer Steam, with retail distribution being handled by Electronic Arts.`,
    category: 'fps',
  },
  {
    id: 6,
    name: 'Heroes of Might and Magic 4',
    price: '1.99€',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Homm3boxart.jpg/220px-Homm3boxart.jpg',
    description: `Heroes of Might and Magic 4: The Restoration of Erathia (commonly referred to as Heroes of Might & Magic 3, or simply Heroes 3) is a turn-based strategy game developed by Jon Van Caneghem through New World Computing originally released for Microsoft Windows by the 3DO Company in 1999. Its ports to several computer and console systems followed in 1999-2000. It is the third installment of the Heroes of Might and Magic series. The game's story is first referenced throughout Might and Magic VI: The Mandate of Heaven and serves as a prequel to Might and Magic VII: For Blood and Honor. The player can choose to play through seven different campaigns telling the story, or play in a scenario against computer or human opponents.`,
    category: 'strategy',
  },
  {
    id: 7,
    name: 'Silver II',
    price: '1.99€',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Silver_Coverart.png/220px-Silver_Coverart.png',
    description: `Silver II, released in 1999, is an action RPG for Microsoft Windows, Dreamcast and OS X. The game was produced by Infogrames initially for Windows, and later on the Dreamcast. The story focuses around a young warrior called David and his quest to retrieve his wife from the clutches of the villain Silver. On his journey he gains a number of followers and visits many different landscapes. The game sold over 400,000 copies.`,
    category: 'rpg',
  },
  {
    id: 9,
    name: 'Defender II',
    price: '0.99€',
    image: 'https://d1k5w7mbrh6vq5.cloudfront.net/images/cache/49/db/dd/49dbdd31c690e9e7fbe6dc9fb7cd9855.jpg',
    description: `Defender II is an arcade video game developed and released by Williams Electronics in 1981. A horizontally scrolling shoot 'em up, the game is set on an unnamed planet where the player must defeat waves of invading aliens while protecting astronauts. Development was led by Eugene Jarvis, a pinball programmer at Williams; Defender was Jarvis' first video game project and drew inspiration from Space Invaders and Asteroids.`,
    category: 'indie',
  },
];

/*
function getQuestionById(state, questionId) {
    return state.questions.questions.filter(q => q.id === questionId)[0];
}
function getAnswerById(state, answerId) {
    state.questions.questions.forEach(question => {
        question.answers.forEach(answer => {
            if (answer.id === answerId) {
                return answer;
            }
        });
    });
    return null;
}
*/

function divideProducts (products) {
  let productsCopy = JSON.parse(JSON.stringify(products));
  const list = [];
  while (productsCopy.length) {
    list.push(productsCopy.splice(0, 4));
  }
  return list;
}

const state = {
    products: [],
    dividedProducts: [],
    cart: [],
};



const getters = {
  products: (state) => state.products,
  dividedProducts: (state) => state.dividedProducts,
  cart: (state) => state.cart,
  getProductById: (state) => (id) => {
    return state.products.find(product => product.id == id);
  }
   /*
    filters: (state) => state.filters,
    questions: (state) => state.questions,
    categories: (state) => state.categories,
    statistics: (state) => state.statistics,
    */
};

const actions = {
  updateProducts(context, category) {
    let products;
    let dividedProducts;
    if (!category) {
      products = allProducts;
      dividedProducts = divideProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product => product.category === category);
      products = filtered
      dividedProducts = divideProducts(
        filtered
      );
    }
    
    context.commit('updateProducts', {products, dividedProducts});
  },
  addToCart(context, product) {
    context.commit('addToCart', product);
  },
  removeFromCart(context, product) {
    context.commit('removeFromCart', product);
  }

  /*
    updateQuery({ commit }, query) { commit('updateQuery', query) },
    updatePage(context, page) {
        context.commit('updatePage', page);
        context.dispatch('updateQuestionList');
    },
    updateSort(context, sort) {
        context.commit('updateSort', sort);
        context.commit('updatePage', 0);
        context.dispatch('updateQuestionList');
    },
    updateCategory(context, category) {
        context.commit('updateCategory', category);
        context.commit('updatePage', 0);
        context.dispatch('updateQuestionList');
        context.dispatch('updateStatistics', category);
    },
    async updateQuestionList({ state, commit }) {
        let questions = await questionService.getQuestions(state.filters);

        // TODO: Implement correct solution in backend after authentication is implemented.
        const votedQuestions = JSON.parse(localStorage.getItem('votedQuestions') || '[]');
        questions.questions = questions.questions.map(question => {
            question.canVote = !votedQuestions.includes(question.id);
            return question;
        });

        commit('updateQuestionList', questions);
    },
    async upVote(context, questionId) {
        await questionService.upVote(questionId);
        context.commit('incrementQuestionScore', questionId);
        context.commit('setCanVote', {questionId, canVote: false});
    },
    async downVote(context, questionId) {
        await questionService.downVote(questionId);
        context.commit('decrementQuestionScore', questionId);
        context.commit('setCanVote', {questionId, canVote: false});
    },
    async upVoteAnswer(context, answerId) {
        await questionService.upVoteAnswer(answerId);
        context.commit('incrementQuestionAnswerScore', answerId);
        context.commit('setAnswerCanVote', {answerId, canVote: false});
    },
    async downVoteAnswer(context, answerId) {
        await questionService.downVoteAnswer(answerId);
        context.commit('decrementQuestionAnswerScore', answerId);
        context.commit('setAnswerCanVote', {answerId, canVote: false});
    },
    async updateStatistics(context, category) {
        let statistics;
        if (category && category.id) {
            statistics = await questionService.getStatistics(category.id);
        } else {
            statistics = await questionService.getStatistics();
        }
        
        context.commit('updateStatistics', {category, ...statistics});
    } 
    */
};
const mutations = {
  updateProducts(state, data) {
    let { products, dividedProducts } = data;
    state.products = products;
    state.dividedProducts = dividedProducts;
  },
  addToCart(state, product) {
    state.cart.push(product);
  },
  removeFromCart(state, product) {
    for (let i in state.cart) {
      if (state.cart[i].id == product.id) {
        state.cart.splice(i, 1);
      }
    }
  }
  /*
    updatePage(state, page) {
        state.filters.page = page;
    },
    updateSort(state, sort) {
        state.filters.sort = sort;
    },
    updateQuery(state, query) {
        state.filters.query = query;
    },
    updateCategory(state, category) {
        state.filters.category = category;
    },
    updateQuestionList(state, questions) {
        state.questions = questions
    },
    incrementQuestionScore(state, questionId) {
        const question = getQuestionById(state, questionId);
        question.score += 1;
    },
    decrementQuestionScore(state, questionId) {
        const question = getQuestionById(state, questionId);
        question.score -= 1;
    },
    setCanVote(state, {questionId, value}) {
        const question = getQuestionById(state, questionId);
        question.canVote = value;
    },
    incrementQuestionAnswerScore(state, answerId) {
        const answer = getAnswerById(state, answerId);
        answer.score += 1;
    },
    decrementQuestionAnswerScore(state, answerId) {
        const answer = getAnswerById(state, answerId);
        answer.score -= 1;
    },
    setAnswerCanVote(state, {answerId, value}) {
        const answer = getAnswerById(state, answerId);
        answer.canVote = value;
    },
    updateStatistics(state, statistics) {
        state.statistics = statistics;
    }
    */
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
