import { FC } from 'react';

/**
 * A utility component for rendering a heading of level 1 with a larger font size.
 *
 * @example
 * <TypographyH1>Heading 1</TypographyH1>
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>} props - Props to be passed to the underlying `<h1>` element.
 * @returns {React.ReactElement} The rendered `<h1>` element.
 */
export const TypographyH1: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({ className, ...props }) => {
  return <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl${className ? ' ' + className : ''}`} {...props} />;
};

/**
 * A utility component for rendering a heading of level 2 with a slightly smaller font size than `<TypographyH1>`.
 *
 * @example
 * <TypographyH2>Heading 2</TypographyH2>
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>} props - Props to be passed to the underlying `<h2>` element.
 * @returns {React.ReactElement} The rendered `<h2>` element.
 */
export const TypographyH2: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({ className, ...props }) => {
  return <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0${className ? ' ' + className : ''}`} {...props} />;
};

/**
 * A utility component for rendering a heading of level 3 with a moderate font size.
 *
 * @example
 * <TypographyH3>Heading 3</TypographyH3>
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>} props - Props to be passed to the underlying `<h3>` element.
 * @returns {React.ReactElement} The rendered `<h3>` element.
 */

export const TypographyH3: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({ className, ...props }) => {
  return <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight${className ? ' ' + className : ''}`} {...props} />;
};

/**
 * A utility component for rendering a heading of level 4 with a moderate font size.
 *
 * @example
 * <TypographyH4>Heading 4</TypographyH4>
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>} props - Props to be passed to the underlying `<h4>` element.
 * @returns {React.ReactElement} The rendered `<h4>` element.
 */
export const TypographyH4: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({ className, ...props }) => {
  return <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight${className ? ' ' + className : ''}`} {...props} />;
};

/**
 * A utility component for rendering a paragraph of text with a moderate font size and a top margin between paragraphs.
 *
 * @example
 * <TypographyP>This is a paragraph of text.</TypographyP>
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>} props - Props to be passed to the underlying `<p>` element.
 * @returns {React.ReactElement} The rendered `<p>` element.
 */
export const TypographyP: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = ({ className, ...props }) => {
  return <p className={`leading-7 [&:not(:first-child)]:mt-6${className ? ' ' + className : ''}`} {...props} />;
};

/**
 * A utility component for rendering a blockquote with a top margin and an italic font style.
 *
 * @example
 * <TypographyBlockquote>This is a blockquote.</TypographyBlockquote>
 *
 * @param {React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>} props - Props to be passed to the underlying `<blockquote>` element.
 * @returns {React.ReactElement} The rendered `<blockquote>` element.
 */
export const TypographyBlockquote: FC<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>> = ({ className, ...props }) => {
  return <blockquote className={`mt-6 border-l-2 pl-6 italic${className ? ' ' + className : ''}`} {...props} />;
};

/**
 * A utility component for rendering a block of inline code with a gray background, rounded corners, and a monospace font.
 *
 * @example
 * <TypographyInlineCode>npm install --save-dev eslint</TypographyInlineCode>
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>} props - Props to be passed to the underlying `<code>` element.
 * @returns {React.ReactElement} The rendered `<code>` element.
 */
export const TypographyInlineCode: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({ className, ...props }) => {
  return <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold${className ? ' ' + className : ''}`} {...props} />;
};

/**
 * A utility component for rendering a large and muted paragraph of text.
 *
 * @example
 * <TypographyLead>This is a lead paragraph.</TypographyLead>
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>} props - Props to be passed to the underlying `<p>` element.
 * @returns {React.ReactElement} The rendered `<p>` element.
 */
export const TypographyLead: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = ({ className, ...props }) => {
  return <p className={`text-xl text-muted-foreground${className ? ' ' + className : ''}`} {...props} />;
};

/**
 * A utility component for rendering a block of large text with a font size of
 * "lg" and a font weight of "semibold".
 *
 * @example
 * <TypographyLarge>This is a block of large text.</TypographyLarge>
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>} props - Props to be passed to the underlying `<div>` element.
 * @returns {React.ReactElement} The rendered `<div>` element.
 */
export const TypographyLarge: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={`text-lg font-semibold"${className ? ' ' + className : ''}`} {...props} />;
};

/**
 * A utility component for rendering small text with a font size of "sm" and a font weight of "medium".
 *
 * @example
 * <TypographySmall>This is small text.</TypographySmall>
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>} props - Props to be passed to the underlying `<small>` element.
 * @returns {React.ReactElement} The rendered `<small>` element.
 */

export const TypographySmall: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({ className, ...props }) => {
  return <small className={`text-sm font-medium leading-none${className ? ' ' + className : ''}`} {...props} />;
};

/**
 * A utility component for rendering a block of muted text with a font size of
 * "sm".
 *
 * @example
 * <TypographyMuted>This is muted text.</TypographyMuted>
 *
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>} props - Props to be passed to the underlying `<p>` element.
 * @returns {React.ReactElement} The rendered `<p>` element.
 */
export const TypographyMuted: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = ({ className, ...props }) => {
  return <p className={`text-sm text-muted-foreground${className ? ' ' + className : ''}`} {...props} />;
};

// export function TypographyTable() {
//   return (
//     <div className="my-6 w-full overflow-y-auto">
//       <table className="w-full">
//         <thead>
//           <tr className="m-0 border-t p-0 even:bg-muted">
//             <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">King's Treasury</th>
//             <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">People's happiness</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="m-0 border-t p-0 even:bg-muted">
//             <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Empty</td>
//             <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Overflowing</td>
//           </tr>
//           <tr className="m-0 border-t p-0 even:bg-muted">
//             <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Modest</td>
//             <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Satisfied</td>
//           </tr>
//           <tr className="m-0 border-t p-0 even:bg-muted">
//             <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Full</td>
//             <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">Ecstatic</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export function TypographyList() {
//   return (
//     <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
//       <li>1st level of puns: 5 gold coins</li>
//       <li>2nd level of jokes: 10 gold coins</li>
//       <li>3rd level of one-liners : 20 gold coins</li>
//     </ul>
//   );
// }
