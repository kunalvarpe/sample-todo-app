FROM python:3.11.6-bullseye AS build_code

COPY requirements.txt /tmp/requirements.txt
RUN pip install --upgrade pip \
  && pip install --prefix="/dep" -r /tmp/requirements.txt \
  && rm -rf /root/.cache/pip

FROM python:3.11.6-bullseye AS resulting_image

COPY --from=build_code /dep /usr/local/

COPY . /code
WORKDIR /code

RUN groupadd -g 1000 todo \
  && useradd -u 1000 -g todo --create-home --shell /bin/bash todo \
  && chown -R todo:todo .
USER todo

ENV PATH="${PATH}:/home/todo/.local/bin"

CMD ["bin/start-gunicorn"]
