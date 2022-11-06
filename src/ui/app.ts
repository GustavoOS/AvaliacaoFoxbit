import { PromptCommandInterface } from './ui';
import promptSync from 'prompt-sync'




const ui = new PromptCommandInterface(promptSync({sigint: true}))
ui.execute()
