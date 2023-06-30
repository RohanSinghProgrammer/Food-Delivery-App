import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: rule => rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Restaurant description',
      validation: rule => rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the dish',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of restaurant',
    },
    {
      name: 'lng',
      type: 'number',
      title: 'Longitude of restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of Restaurant',
      validation: rule => rule.required()
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating between 1 to 5',
      validation: rule => rule.min(1).max(5).required().error("Please enter a value between 1 to 5")
    },
    {
      name: 'review',
      type: 'string',
      title: 'Review of Restaurant'
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
      validation: rule => rule.required()
    },
    {
        name: 'dishes',
        type: 'array',
        title: 'Dishes',
        of: [
            {
                type: 'reference',
                to: {
                    type: 'dish'
                }
            }
        ]
    }
  ],
})
