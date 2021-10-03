#!/usr/bin/env node
import 'module-alias/register'
import { foo } from '@src/main'

foo().then(() => {}).catch((_err) => {})
