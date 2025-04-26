// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	// site: "http://localhost:4321",
	site: "https://docs.mkdirs.com",
	integrations: [
		sitemap(),
		starlight({
			title: "艺创AI",
			favicon: "./favicon.ico",
			social: {
				github: "https://github.com/MkdirsHQ",
				twitter: "https://x.com/javay_hu",
				youtube: "https://www.youtube.com/@MkdirsHQ",
			},
			logo: {
				src: "./src/assets/logo-rounded.png",
				alt: "Mkdirs Logo",
			},
			// https://starlight.astro.build/guides/i18n/#use-a-root-locale
			defaultLocale: "zh-cn",
			locales: {
				root: {
					label: "English",
					lang: "en",
				},
				"zh-cn": {
					label: "简体中文",
					lang: "zh-CN",
				},
			},
			components: {
				Head: './src/components/Head.astro',
			},
			sidebar: [
				{
					label: "模板介绍",
					translations: {
						"en": "Introduction"
					},
					slug: "index",
				},
				{
					label: "常见问题",
					translations: {
						"en": "FAQ"
					},
					slug: "faq",
				},
				{
					label: "路线图",
					translations: {
						"en": "Roadmap"
					},
					link: "https://github.com/MkdirsHQ/mkdirs-template/issues/10",
				},
				{
					label: "前提条件",
					translations: {
						"en": "Prerequisites"
					},
					slug: "prerequisites",
				},
				{
					label: "安装部署",
					translations: {
						"en": "Installation"
					},
					slug: "installation",
				},
				{
					label: "配置环境",
					translations: {
						"en": "Configuration"
					},
					items: [
						{
							label: "数据服务 - Sanity",
							translations: {
								"en": "Sanity"
							},
							slug: "configuration/sanity"
						},
						{
							label: "邮件服务 - Resend",
							translations: {
								"en": "Resend"
							},
							slug: "configuration/resend"
						},
						{
							label: "支付服务 - Stripe",
							translations: {
								"en": "Stripe"
							},
							slug: "configuration/stripe"
						},
						{
							label: "认证服务 - Auth",
							translations: {
								"en": "Auth"
							},
							slug: "configuration/auth"
						},
						{
							label: "数据分析 - Analytics",
							translations: {
								"en": "Analytics"
							},
							slug: "configuration/analytics"
						},
						{
							label: "AI 模型 - AI",
							translations: {
								"en": "AI"
							},
							slug: "configuration/ai"
						},
					],
				},
				{
					label: "部署上线",
					translations: {
						"en": "Deployment"
					},
					items: [
						{
							label: "部署到 Vercel",
							translations: {
								"en": "Vercel"
							},
							slug: "deployment/vercel"
						},
						{
							label: "Docker 自部署",
							translations: {
								"en": "Docker"
							},
							slug: "deployment/docker"
						},
						{
							label: "部署到 Dokploy",
							translations: {
								"en": "Dokploy"
							},
							slug: "deployment/dokploy"
						},
					],
				},
				{
					label: "自定义",
					translations: {
						"en": "Customization"
					},
					items: [
						{
							label: "自定义网站信息",
							translations: {
								"en": "Customize Information"
							},
							slug: "customization/information"
						},
						{
							label: "自定义 Logo",
							translations: {
								"en": "Customize Logo"
							},
							slug: "customization/logo"
						},
						{
							label: "自定义字体",
							translations: {
								"en": "Customize Font"
							},
							slug: "customization/font"
						},
						{
							label: "自定义主题",
							translations: {
								"en": "Customize Theme"
							},
							slug: "customization/theme"
						},
						{
							label: "自定义卡片样式",
							translations: {
								"en": "Customize Card"
							},
							slug: "customization/card"
						},
						{
							label: "自定义分类",
							translations: {
								"en": "Customize Category"
							},
							slug: "customization/category"
						},
						{
							label: "自定义邮件",
							translations: {
								"en": "Customize Email"
							},
							slug: "customization/email"
						},
						{
							label: "自定义页面",
							translations: {
								"en": "Customize Page"
							},
							slug: "customization/custom-page"
						},
					],
				},
				{
					label: "使用指南",
					translations: {
						"en": "Guide"
					},
					items: [
						{
							label: "开发相关",
							translations: {
								"en": "Development"
							},
							slug: "guide/develop"
						},
						{
							label: "提交数据",
							translations: {
								"en": "Submission"
							},
							slug: "guide/submission"
						},
						{
							label: "赞助广告",
							translations: {
								"en": "Sponsor Ads"
							},
							slug: "guide/sponsor-ads"
						},
						{
							label: "Sanity 相关",
							translations: {
								"en": "Sanity"
							},
							slug: "guide/sanity"
						},
					],
				},
			]
		}),
	],
});
