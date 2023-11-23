(function () {
  let tasksStore = localStorage.getItem("tasks");
  if (!tasksStore) {
    localStorage.setItem("tasks", "");
  } else {
    tasksStore
      .split(",")
      .filter((item) => item.length > 0)
      .forEach((item) => {
        document.querySelector("#tasks").innerHTML += `
				<div class="task">
				<button class="delete">
						<i class="far fa-trash-alt"></i>
					</button>
					<span id="taskname">
						${item}
					</span>
				</div>
			`;
      });
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        const index = Array.prototype.indexOf.call(
          this.parentNode.parentNode.children,
          this.parentNode
        );
        const arr = localStorage
          .getItem("tasks")
          .split(",")
          .filter((item) => item.length > 0);
        arr.splice(index, 1);
        localStorage.setItem("tasks", arr.join(","));
        this.parentNode.remove();
      };
    }
  }
  // Create a "close" button and append it to each list item
  document.querySelector("#push").onclick = function () {
    if (document.querySelector("#newtask input").value.length == 0) {
      alert("Please Enter a Task");
    } else {
      document.querySelector("#tasks").innerHTML += `
				<div class="task">
				<button class="delete">
						<i class="far fa-trash-alt"></i>
					</button>
					<span id="taskname">
						${document.querySelector("#newtask input").value}
					</span>
					
				</div>
			`;

      const arr1 = localStorage
        .getItem("tasks")
        .split(",")
        .filter((item) => item.length > 0);
      arr1.push(document.querySelector("#newtask input").value);
      localStorage.setItem("tasks", arr1.join(","));
      var current_tasks = document.querySelectorAll(".delete");
      for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function (i) {
          const index = Array.prototype.indexOf.call(
            this.parentNode.parentNode.children,
            this.parentNode
          );
          const arr = localStorage
            .getItem("tasks")
            .split(",")
            .filter((item) => item.length > 0);
          arr.splice(index, 1);
          localStorage.setItem("tasks", arr.join(","));
          this.parentNode.remove();
        };
      }
      document.querySelector("#newtask input").value = "";
    }
  };
})();
