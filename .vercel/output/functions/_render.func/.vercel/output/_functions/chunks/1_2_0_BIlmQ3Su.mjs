import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DoqbvIE_.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"-avehrs-latest-feature-release\">🚀 AveHR’s Latest Feature Release</h2>\n<p>Hello AveHR users! We’re thrilled to announce new features and improvements that will further enhance your workflow. Here’s everything you need to know:</p>\n<h3 id=\"-new-features--enhancements\">🍿 New Features &#x26; Enhancements</h3>\n<ul>\n<li><strong>Multiple Roles for Users (RLN):</strong> Users can now have more than one role, increasing flexibility across various functions.</li>\n<li><strong>Enhanced Employee Export (RLN):</strong> Additional columns are now included when exporting employee data to Excel.</li>\n<li><strong>ID Registration Restriction (RLN):</strong> Users cannot register with the same ID within the same company, enhancing security.</li>\n<li><strong>Optional Contact Email for Job Recruiting (RLN):</strong> Users can now add a contact email when creating job postings.</li>\n<li><strong>Export Leave and Entitlements (RLN):</strong> Users can now export leave data and entitlements for employees.</li>\n<li><strong>Bulk Approvals for Leave Requests:</strong> You can now approve or reject multiple leave requests simultaneously, saving time.</li>\n<li><strong>Approval Workflow Editing (RLN):</strong> Users can now edit approval workflows by department for better control.</li>\n</ul>\n<h3 id=\"-changes\">🔄 Changes</h3>\n<ul>\n<li><strong>Multiple File Uploads for Leave Requests:</strong> Users can now attach multiple files when creating leave requests.</li>\n<li><strong>Token Lifetime Update:</strong> The lifetime for tokens has been reduced to 24 hours for increased security.</li>\n<li><strong>Pricing Plan Update:</strong> We’ve simplified pricing by removing the enterprise and business plans.</li>\n</ul>\n<h3 id=\"-bug-fixes\">🐞 Bug Fixes</h3>\n<ul>\n<li>Resolved the <strong>search bug</strong> on the “My Team” leaves page.</li>\n<li>Fixed a bug affecting the <strong>date of resignation</strong> (RLN).</li>\n<li>Corrected an issue with the <strong>user profile dropdown</strong> not displaying properly.</li>\n<li>Fixed a bug preventing users from viewing and uploading resumes in the <strong>candidates section</strong> (RLN).</li>\n<li>Resolved an issue with <strong>approval workflows</strong> when creating or editing departments (RLN).</li>\n<li>Fixed a <strong>server error</strong> that occurred when assigning a review in the performance review section.</li>\n<li>Corrected a bug where <strong>employee contracts</strong> were not displaying (RLN).</li>\n<li>Fixed the <strong>employee registration link</strong> bug.</li>\n</ul>\n<hr>\n<h3 id=\"️-minor-release-21-dec-2023\">🛠️ Minor Release [21 Dec 2023]</h3>\n<ul>\n<li><strong>Fixed:</strong> Email verification not functioning properly has been resolved.</li>\n</ul>\n<p>Thank you for using AveHR! We’re committed to improving your experience, and as always, we welcome your feedback. Let us know how we can continue to make AveHR the best platform for your HR needs.</p>";

				const frontmatter = {"title":"Introducing AveHR Latest Updates!","date":"2023-12-20","versionNumber":"1.2.0","description":"We’ve introduced new features, enhancements, and important bug fixes in this release.","image":{"src":"../../assets/starlog-placeholder-1.jpg","alt":"AveHR update snapshot."}};
				const file = "/Users/arditxhaferi/Sites/AveHR-Release-Notes/src/content/releases/1_2_0.md";
				const url = undefined;
				function rawContent() {
					return "\n## 🚀 AveHR’s Latest Feature Release\n\nHello AveHR users! We’re thrilled to announce new features and improvements that will further enhance your workflow. Here's everything you need to know:\n\n### 🍿 New Features & Enhancements\n\n- **Multiple Roles for Users (RLN):** Users can now have more than one role, increasing flexibility across various functions.\n- **Enhanced Employee Export (RLN):** Additional columns are now included when exporting employee data to Excel.\n- **ID Registration Restriction (RLN):** Users cannot register with the same ID within the same company, enhancing security.\n- **Optional Contact Email for Job Recruiting (RLN):** Users can now add a contact email when creating job postings.\n- **Export Leave and Entitlements (RLN):** Users can now export leave data and entitlements for employees.\n- **Bulk Approvals for Leave Requests:** You can now approve or reject multiple leave requests simultaneously, saving time.\n- **Approval Workflow Editing (RLN):** Users can now edit approval workflows by department for better control.\n\n### 🔄 Changes\n\n- **Multiple File Uploads for Leave Requests:** Users can now attach multiple files when creating leave requests.\n- **Token Lifetime Update:** The lifetime for tokens has been reduced to 24 hours for increased security.\n- **Pricing Plan Update:** We’ve simplified pricing by removing the enterprise and business plans.\n\n### 🐞 Bug Fixes\n\n- Resolved the **search bug** on the \"My Team\" leaves page.\n- Fixed a bug affecting the **date of resignation** (RLN).\n- Corrected an issue with the **user profile dropdown** not displaying properly.\n- Fixed a bug preventing users from viewing and uploading resumes in the **candidates section** (RLN).\n- Resolved an issue with **approval workflows** when creating or editing departments (RLN).\n- Fixed a **server error** that occurred when assigning a review in the performance review section.\n- Corrected a bug where **employee contracts** were not displaying (RLN).\n- Fixed the **employee registration link** bug.\n\n---\n\n### 🛠️ Minor Release [21 Dec 2023]\n\n- **Fixed:** Email verification not functioning properly has been resolved.\n\nThank you for using AveHR! We’re committed to improving your experience, and as always, we welcome your feedback. Let us know how we can continue to make AveHR the best platform for your HR needs.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-avehrs-latest-feature-release","text":"🚀 AveHR’s Latest Feature Release"},{"depth":3,"slug":"-new-features--enhancements","text":"🍿 New Features & Enhancements"},{"depth":3,"slug":"-changes","text":"🔄 Changes"},{"depth":3,"slug":"-bug-fixes","text":"🐞 Bug Fixes"},{"depth":3,"slug":"️-minor-release-21-dec-2023","text":"🛠️ Minor Release [21 Dec 2023]"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
