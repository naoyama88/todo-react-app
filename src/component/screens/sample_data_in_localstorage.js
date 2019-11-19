export default function() {
    return {
        lastCategoryId: 2,
        lastSubcategoryId: 5,
        lastTodoId: 13,
        activeCategoryIndex: 0,
        categories: [
            {
                id: 1,
                title: "Shopping",
                subcategories: [
                    {
                        id: 1,
                        title: "IGA",
                        items: [
                            {
                                todoId: 1,
                                item: "1,shampoo",
                                checked: false
                            },
                            {
                                todoId: 2,
                                item: "2,milk",
                                checked: true
                            },
                            {
                                todoId: 3,
                                item: "3,bread",
                                checked: false
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "Shoppers",
                        items: [
                            {
                                todoId: 4,
                                item: "4,shampoo",
                                checked: false
                            },
                            {
                                todoId: 5,
                                item: "5,body soap",
                                checked: true
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: "Dollerama",
                        items: [
                            {
                                todoId: 6,
                                item: "6,plastic box",
                                checked: true
                            },
                            {
                                todoId: 7,
                                item: "7,pen case",
                                checked: false
                            },
                            {
                                todoId: 8,
                                item: "8,cushion",
                                checked: false
                            },
                            {
                                todoId: 9,
                                item: "9,pillow",
                                checked: true
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "Gym",
                subcategories: [
                    {
                        id: 4,
                        title: "Gym",
                        items: [
                            {
                                todoId: 10,
                                item: "10,chest",
                                checked: true
                            },
                            {
                                todoId: 11,
                                item: "11,leg",
                                checked: false
                            }
                        ]
                    },
                    {
                        id: 5,
                        title: "Food",
                        items: [
                            {
                                todoId: 12,
                                item: "12,vegitable",
                                checked: false
                            },
                            {
                                todoId: 13,
                                item: "13,100g protain",
                                checked: true
                            }
                        ]
                    }
                ]
            }
        ]
    };
}
