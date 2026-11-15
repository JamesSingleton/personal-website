import { author } from "@/schemaTypes/documents/author";
import { blog } from "@/schemaTypes/documents/blog";
import { blogIndex } from "@/schemaTypes/documents/blog-index";
import { faq } from "@/schemaTypes/documents/faq";
import { footer } from "@/schemaTypes/documents/footer";
import { homePage } from "@/schemaTypes/documents/home-page";
import { navbar } from "@/schemaTypes/documents/navbar";
import { organization } from "@/schemaTypes/documents/organization";
import { page } from "@/schemaTypes/documents/page";
import { profile } from "@/schemaTypes/documents/profile";
import { project } from "@/schemaTypes/documents/project";
import { redirect } from "@/schemaTypes/documents/redirect";
import { role } from "@/schemaTypes/documents/role";
import { settings } from "@/schemaTypes/documents/settings";
import { tool } from "@/schemaTypes/documents/tool";
import { toolCategory } from "@/schemaTypes/documents/tool-category";

export const singletons = [
  homePage,
  profile,
  blogIndex,
  settings,
  footer,
  navbar,
];

export const documents = [
  blog,
  page,
  project,
  role,
  organization,
  tool,
  toolCategory,
  faq,
  author,
  ...singletons,
  redirect,
];
