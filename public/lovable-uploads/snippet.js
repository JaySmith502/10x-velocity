<link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
<script type="module">
	import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

	createChat({
		webhookUrl: 'https://primary-production-8159e.up.railway.app/webhook/ffcf29b6-19e9-40fd-81a6-132910560043/chat',
        webhookConfig: {
            method: 'POST',
            headers: {}
        },
        target: '#n8n-chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: [
            'Hi there! 👋',
            'My name is Alyssa. How can I assist you today?'
        ],
        i18n: {
            en: {
                title: 'Hi there! 👋',
                subtitle: "Start a chat. We're here to help you 24/7.",
                footer: '',
                getStarted: 'New Conversation',
                inputPlaceholder: 'Type your question..',
            },
        },
	});
</script>


