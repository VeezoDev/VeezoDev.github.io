export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
    },
    navigationMenu: {
      slots: {
        link: "before:rounded-full",
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
      // variants: {
      //   disabled: {
      //     true: {
      //       trigger: "cursor-not-allowed opacity-75",
      //     },
      //   },
      // },
    },
  },
});
