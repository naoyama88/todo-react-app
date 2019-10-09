export default function() {
    return {
        lastTodoId: 13,
        categories: [
            {
                id: 1,
                title: "Shopping",
                isCurrentCategory: true,
                subcategories: [
                    {
                        title: "IGA",
                        items: [
                            {
                                todoId: 1,
                                item: "shampoo",
                                checked: false
                            },
                            {
                                todoId: 2,
                                item: "milk",
                                checked: true
                            },
                            {
                                todoId: 3,
                                item: "bread",
                                checked: false
                            }
                        ]
                    },
                    {
                        title: "Shoppers",
                        items: [
                            {
                                todoId: 4,
                                item: "shampoo",
                                checked: false
                            },
                            {
                                todoId: 5,
                                item: "body soap",
                                checked: true
                            }
                        ]
                    },
                    {
                        title: "Dollerama",
                        items: [
                            {
                                todoId: 6,
                                item: "plastic box",
                                checked: true
                            },
                            {
                                todoId: 7,
                                item: "pen case",
                                checked: false
                            },
                            {
                                todoId: 8,
                                item: "cushion",
                                checked: false
                            },
                            {
                                todoId: 9,
                                item: "pillow",
                                checked: true
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "Gym",
                isCurrentCategory: false,
                subcategories: [
                    {
                        title: "Gym",
                        items: [
                            {
                                todoId: 10,
                                item: "chest",
                                checked: true
                            },
                            {
                                todoId: 11,
                                item: "leg",
                                checked: false
                            }
                        ]
                    },
                    {
                        title: "Food",
                        items: [
                            {
                                todoId: 12,
                                item: "vegitable",
                                checked: false
                            },
                            {
                                todoId: 13,
                                item: "100g protain",
                                checked: true
                            }
                        ]
                    }
                ]
            }
        ]
    };
}
