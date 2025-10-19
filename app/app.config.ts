export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "neutral",
    },
    icons: {
      system: "i-ph-desktop",
      light: "i-ph-sun",
      dark: "i-ph-moon",
    },
    navigationMenu: {
      slots: {
        link: "before:rounded-2xl xl:before:rounded-3xl",
      },
    },
    accordion: {
      slots: {
        root: "w-full",
        item: "border last:border p-3.5 mt-2 shadow-lg rounded-lg data-[state=open]:bg-primary data-[state=open]:text-(--ui-bg)",
        header: "flex",
        trigger:
          "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0",
        content:
          "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
        body: "text-base pb-3.5",
        leadingIcon: "shrink-0 size-5",
        trailingIcon:
          "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
        label: "text-start text-base font-bold break-words",
      },
    },
    tabs: {
      variants: {
        variant: {
          pill: {
            list: "bg-default border border-default rounded-3xl",
            trigger: "grow",
            indicator: "rounded-3xl shadow-xs",
          },
        },
      },
      compoundVariants: [
        {
          color: "neutral",
          variant: "pill",
          class: {
            indicator: "bg-accented",
            trigger:
              "data-[state=active]:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted",
          },
        },
      ],
    },
  },
});
