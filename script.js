const accordion1 = document.getElementById("accordion1");
const accordion2 = document.getElementById("accordion2");
const accordion3 = document.getElementById("accordion3");

const accordionContent1 = document.getElementById("accordionContent1");
const accordionContent2 = document.getElementById("accordionContent2");
const accordionContent3 = document.getElementById("accordionContent3");

accordion1.addEventListener("click", function (e) {
  if (accordion1.classList.contains("accordion-active")) {
    accordion1.classList.remove("accordion-active");
    accordionContent1.classList.remove("a-c-active");
    accordionContent1.classList.add("hidden");
  } else if (accordion2.classList.contains("accordion-active")) {
    accordion2.classList.remove("accordion-active");
    accordionContent2.classList.remove("a-c-active");
    accordionContent2.classList.add("hidden");
    accordionContent1.classList.remove("hidden");
    accordion1.classList.add("accordion-active");
    accordionContent1.classList.add("a-c-active");
  } else if (accordion3.classList.contains("accordion-active")) {
    accordion3.classList.remove("accordion-active");
    accordionContent3.classList.remove("a-c-active");
    accordionContent3.classList.add("hidden");
    accordionContent1.classList.remove("hidden");
    accordion1.classList.add("accordion-active");
    accordionContent1.classList.add("a-c-active");
  } else {
    accordionContent1.classList.remove("hidden");
    accordion1.classList.add("accordion-active");
    accordionContent1.classList.add("a-c-active");
  }
});

accordion2.addEventListener("click", function (e) {
  if (accordion2.classList.contains("accordion-active")) {
    accordion2.classList.remove("accordion-active");
    accordionContent2.classList.remove("a-c-active");
    accordionContent2.classList.add("hidden");
  } else if (accordion1.classList.contains("accordion-active")) {
    accordion1.classList.remove("accordion-active");
    accordionContent1.classList.remove("a-c-active");
    accordionContent1.classList.add("hidden");
    accordionContent2.classList.remove("hidden");
    accordion2.classList.add("accordion-active");
    accordionContent2.classList.add("a-c-active");
  } else if (accordion3.classList.contains("accordion-active")) {
    accordion3.classList.remove("accordion-active");
    accordionContent3.classList.remove("a-c-active");
    accordionContent3.classList.add("hidden");
    accordionContent2.classList.remove("hidden");
    accordion2.classList.add("accordion-active");
    accordionContent2.classList.add("a-c-active");
  } else {
    accordionContent2.classList.remove("hidden");
    accordion2.classList.add("accordion-active");
    accordionContent2.classList.add("a-c-active");
  }
});

accordion3.addEventListener("click", function (e) {
  if (accordion3.classList.contains("accordion-active")) {
    accordion3.classList.remove("accordion-active");
    accordionContent3.classList.remove("a-c-active");
    accordionContent3.classList.add("hidden");
  } else if (accordion1.classList.contains("accordion-active")) {
    accordion1.classList.remove("accordion-active");
    accordionContent1.classList.remove("a-c-active");
    accordionContent1.classList.add("hidden");
    accordionContent3.classList.remove("hidden");
    accordion3.classList.add("accordion-active");
    accordionContent3.classList.add("a-c-active");
  } else if (accordion2.classList.contains("accordion-active")) {
    accordion2.classList.remove("accordion-active");
    accordionContent2.classList.remove("a-c-active");
    accordionContent2.classList.add("hidden");
    accordionContent3.classList.remove("hidden");
    accordion3.classList.add("accordion-active");
    accordionContent3.classList.add("a-c-active");
  } else {
    accordionContent3.classList.remove("hidden");
    accordion3.classList.add("accordion-active");
    accordionContent3.classList.add("a-c-active");
  }
});