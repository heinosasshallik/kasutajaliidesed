const allProducts = [
  {
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
    category: 'FPS',
  }
];

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

const state = {
    products: [],
    cart: [],
};

const getters = {
    filters: (state) => state.filters,
    questions: (state) => state.questions,
    categories: (state) => state.categories,
    statistics: (state) => state.statistics,
};

const actions = {
  updateProducts(context, category) {
    let products;
    if (!category) {
      products = allProducts;
    } else {
      products = allProducts.filter(product => product.category === category);
    }
    
    context.commit('updateProducts', products);
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
  updateProducts(state, products) {
    state.products = products;
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
