export const RedisKeys = {
    products: {
        all: 'products:all',
        byId: (id: string | number) => `product:${id}`,
    },

    users: {
        all: 'users:all',
        byId: (id: string | number) => `user:${id}`,
    },

    sessions: {
        byId: (id: string) => `session:${id}`,
    },
};

