# Sample TODO Application

Sample application to demonstrate the todo management application

[todo-fe (Frontend application docs)](todo-fe/README.md)

[todo-be (Backend application docs)](todo-be/README.md)

# Run Applications Locally

## Run Both Frontend and Backend

<details><summary>$ bin/build-and-run</summary>
<p>

```bash
Creating network "sample-todo-app_shared-network" with driver "bridge"
Building todo-be
[+] Building 0.9s (12/12) FINISHED                                                                                                                                           
 => [internal] load build definition from Dockerfile                                                                                                                    0.0s
 => => transferring dockerfile: 37B                                                                                                                                     0.0s
 => [internal] load .dockerignore                                                                                                                                       0.0s
 => => transferring context: 2B                                                                                                                                         0.0s
 => [internal] load metadata for docker.io/library/python:3.11.6-bullseye                                                                                               0.7s
 => [internal] load build context                                                                                                                                       0.1s
 => => transferring context: 225.15kB                                                                                                                                   0.1s
 => [resulting_image 1/5] FROM docker.io/library/python:3.11.6-bullseye@sha256:eae58ca3a59ce553e453fb535888bd1a391c6282e81fd49fd7321f147622147e                         0.0s
 => CACHED [build_code 2/3] COPY requirements.txt /tmp/requirements.txt                                                                                                 0.0s
 => CACHED [build_code 3/3] RUN pip install --upgrade pip   && pip install --prefix="/dep" -r /tmp/requirements.txt   && rm -rf /root/.cache/pip                        0.0s
 => CACHED [resulting_image 2/5] COPY --from=build_code /dep /usr/local/                                                                                                0.0s
 => CACHED [resulting_image 3/5] COPY . /code                                                                                                                           0.0s
 => CACHED [resulting_image 4/5] WORKDIR /code                                                                                                                          0.0s
 => CACHED [resulting_image 5/5] RUN groupadd -g 1000 todo   && useradd -u 1000 -g todo --create-home --shell /bin/bash todo   && chown -R todo:todo .                  0.0s
 => exporting to image                                                                                                                                                  0.0s
 => => exporting layers                                                                                                                                                 0.0s
 => => writing image sha256:67ed636a3c964090766e0d9e0350307ebc6e86b0133c09079ee703899d49452a                                                                            0.0s
 => => naming to docker.io/library/todo-be                                                                                                                              0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
Creating sample-todo-app_todo-be_1 ... done
Creating sample-todo-app_todo-fe_1 ... done
...
...
```

</p>
</details>

## Run Frontend

<details><summary>$ bin/build-and-run todo-fe</summary>
<p>

```bash
Creating network "sample-todo-app_shared-network" with driver "bridge"
Creating sample-todo-app_todo-fe_1 ... done
Attaching to sample-todo-app_todo-fe_1
todo-fe_1  | 
todo-fe_1  | > todo-fe@0.1.0 start
todo-fe_1  | > react-scripts start
...
...
```

</p>
</details>

## Run Backend

<details><summary>$ bin/build-and-run todo-be</summary>
<p>

```bash
Creating network "sample-todo-app_shared-network" with driver "bridge"
Building todo-be
[+] Building 1.9s (13/13) FINISHED                                                                                                                                           
 => [internal] load build definition from Dockerfile                                                                                                                    0.0s
 => => transferring dockerfile: 37B                                                                                                                                     0.0s
 => [internal] load .dockerignore                                                                                                                                       0.0s
 => => transferring context: 2B                                                                                                                                         0.0s
 => [internal] load metadata for docker.io/library/python:3.11.6-bullseye                                                                                               1.7s
 => [auth] library/python:pull token for registry-1.docker.
...
...
```

</p>
</details>
