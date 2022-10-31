import express from 'express'
import {deleteData, postBlog,fetchAllBlogs, getSingleData,editSingleData} from './controls.js';
const router=express.Router();


router.post('/add',postBlog)

//Fetching All Data
router.get('/all',fetchAllBlogs)

//Editing Section
router.get('/edit/:id',getSingleData)
router.put('/edit/:id',editSingleData)

//Deleting
router.delete('/delete/:id',deleteData);

export default router;