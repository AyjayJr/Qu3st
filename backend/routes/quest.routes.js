import { Router } from 'express';
const router = Router();
// const auth = require('../middleware/authenticate')

import { createQuest } from '../controllers/createQuest';
import { deleteQuest } from '../controllers/deleteQuest';
import { editQuest } from '../controllers/editQuest';
import { readQuest } from '../controllers/readQuest';

// Create Party Route
router.route('/create').post(auth, createQuest);

// Delete Party Route
router.route('/delete').put(auth, deleteQuest);

// leave party route
router.route('/edit').patch(auth, editQuest);

// Join Party Route
router.route('/read').patch(auth, readQuest);


export default router;
