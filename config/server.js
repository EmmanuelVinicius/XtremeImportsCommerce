// config used by server side only
const dbHost = process.env.DB_HOST || 'pessoas-e2ext.mongodb.net';
const dbName = process.env.DB_NAME || 'shop';
const dbUser = process.env.DB_USER || 'emmanuel';
const dbPass = process.env.DB_PASS || 'emmanuel';
const dbCred =
	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';

const dbUrl =
	process.env.DB_URL || `mongodb+srv://${dbCred}${dbHost}/${dbName}`;

module.exports = {
	// used by Store (server side)
	apiBaseUrl: process.env.API_BASE_URL || `http://localhost:3001/api/v1`,

	// Access-Control-Allow-Origin
	storeBaseUrl: process.env.STORE_BASE_URL || `http://localhost:3000`,

	// used by API
	adminBaseURL: process.env.ADMIN_BASE_URL || 'http://localhost:3002',
	adminLoginPath: process.env.ADMIN_LOGIN_PATH || '/login',

	// used by API to service assets
	assetsBaseURL: process.env.ASSETS_BASE_URL || 'http://localhost:3001',

	apiListenPort: process.env.API_PORT || 3001,

	// used by API
	mongodbServerUrl: dbUrl,

	// smpt server parameters
	smtpServer: {
		host: process.env.SMTP_HOST || 'in-v3.mailjet.com',
		port: process.env.SMTP_PORT || 587,
		secure: process.env.SMTP_SECURE || false,
		user: process.env.SMTP_USER || 'bea1dcd33f791b595d0199c964cb7deb',
		pass: process.env.SMTP_PASS || 'dd35bd51b5f9e64a9c94205c93f7c4eb',
		fromName: process.env.SMTP_FROM_NAME || 'Xtreme Imports',
		fromAddress:
			process.env.SMTP_FROM_ADDRESS || 'no-reply@xtremeimports.com.br'
	},

	// key to sign tokens
	jwtSecretKey:
		process.env.JWT_SECRET_KEY ||
		'4A1DF93B724116879E2DD47777CD7E2B9B85EC4A9F7B2DF61656C782A8A10C02',

	// key to sign store cookies
	cookieSecretKey:
		process.env.COOKIE_SECRET_KEY ||
		'ABBD0BF46A2B15603E171BD82FA7E3043DB760B2EDC623A84C71221487ED0EEF',

	// path to uploads
	categoriesUploadPath: 'public/content/images/categories',
	productsUploadPath: 'public/content/images/products',
	filesUploadPath: 'public/content',
	themeAssetsUploadPath: 'theme/assets/images',

	// url to uploads
	categoriesUploadUrl: '/images/categories',
	productsUploadUrl: '/images/products',
	filesUploadUrl: '',
	themeAssetsUploadUrl: '/assets/images',

	// store UI language
	language: process.env.LANGUAGE || 'pt_BR',

	// used by API
	orderStartNumber: 1000,

	// cost factor, controls how much time is needed to calculate a single BCrypt hash
	// for production: recommended salRounds > 12
	saltRounds: process.env.SALT_ROUNDS || 12,

	// used by API
	orderStartNumber: 1000,

	developerMode: true
};
