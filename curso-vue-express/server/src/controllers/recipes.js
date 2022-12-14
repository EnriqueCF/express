class RecipesController {
  recipe(req, res, next) {
    return res
      .status(200)
      .json({ key: 'value' })
  }

  recipeById(req, res, next) {
    return res
      .status(200)
      .json({ id: req.params.id })
  }

  addRecipe(req, res, next) {
    return res.status(201)
      .json({ key: 'value post' })
  }

  editRecipeById(req, res, next) {
    return res.status(200)
    .json({ key: 'value put' })
  }
}

export default new RecipesController()