export interface IPlatformCategoriesRepository {
    getCategories() : Promise<any>;
    insertCategory(name:String) : Promise<any>;
    updateCategory(categoryId:String, name:String) : Promise<any>;
    deleteCategory(categoryId:String) : Promise<any>;
} 