import { Router } from 'express'
import { master, token } from '../../services/passport';
import { getUser } from './controller';

const router = new Router()
router.get('/', getUser)
router.get('/:id', (req, res) => res.send('GET USER DETAIL'))
router.post('/', master() ,(req, res) => res.send('POST USER'))
router.put('/', (req, res) => res.send('PUT USER'))
router.delete('/', token({required: true, roles: ['admin']}) , (req, res) => res.send('DELTE USER'))

export default router